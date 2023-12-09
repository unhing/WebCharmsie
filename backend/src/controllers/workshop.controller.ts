import { Request, Response } from "express";
import Workshop from "../models/workshop.model";

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newWorkshop = request.body;
    const workshop = await Workshop.create(newWorkshop);
    return response.status(204).json(workshop);
  } catch (error) {
    return response.status(500).json(error);
  }
}
