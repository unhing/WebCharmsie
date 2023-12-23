import { Request, Response } from "express";
import { Request as RequestWithCredential } from "express-jwt";
import jwt from "jsonwebtoken";
import { compare, genSalt, hash } from "bcryptjs";
import { AUTH_EXPIRE_TIME, AUTH_SECRET_KEY } from "../config";
import User from "../models/user.model";

export async function login(request: Request, response: Response) {
  try {
    const { email, password } = request.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return response.status(404).json({ message: "user-not-found" });
    }
    const isPasswordCorrect: boolean = await comparePassword(
      password,
      foundUser.password
    );
    if (!isPasswordCorrect) {
      return response.status(401).json({ message: "invalid-password" });
    }
    const token = jwt.sign(
      {
        id: foundUser._id,
        email: foundUser.email,
        role: foundUser.role,
      },
      AUTH_SECRET_KEY,
      {
        expiresIn: AUTH_EXPIRE_TIME,
      }
    );
    response.status(200).json(token);
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}

export async function signup(request: Request, response: Response) {
  try {
    const { name, dateOfBirth, email, address, phoneNumber, password } =
      request.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return response
        .status(409)
        .json({ message: "email-has-already-been-used" });
    }
    const hashedPassword = await hashPassword(password);
    await User.create({
      name,
      dateOfBirth,
      email,
      address,
      phoneNumber,
      password: hashedPassword,
    });
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}

export async function editProfile(
  request: RequestWithCredential,
  response: Response
) {
  try {
    const { id } = request.auth?.id ?? "";
    const newInformation = request.body;
    await User.findByIdAndUpdate(id, newInformation);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}

async function hashPassword(password: string): Promise<string> {
  const salt = await genSalt(10);
  return hash(password, salt);
}

async function comparePassword(
  providedPass: string,
  storedPass: string
): Promise<boolean> {
  const isPasswordMatched = await compare(providedPass, storedPass);
  return isPasswordMatched;
}
