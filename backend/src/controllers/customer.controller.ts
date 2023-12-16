import { Request, Response } from "express";
import User from "../models/user.model";

export async function paginate(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const { page, size, name } = request.query;
    const filter: Record<string, unknown> = {};
    if (name) {
      filter["name"] = { $regex: name as string, $options: "i" };
    }
    const skip = (parseInt(page as string) - 1) * parseInt(size as string);
    const limit = parseInt(size as string);
    const usersPromise = User.find(filter).skip(skip).limit(limit).exec();
    const totalCountPromise = User.countDocuments(filter);
    const [users, totalCount] = await Promise.all([
      usersPromise,
      totalCountPromise,
    ]);
    return response.status(200).json({
      result: users,
      totalCount,
    });
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function detail(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const { id } = request.params;
    const user = await User.findById(id);
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function update(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    const newUser = request.body;
    await User.findByIdAndUpdate(id, newUser);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}

export async function remove(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    await User.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}
