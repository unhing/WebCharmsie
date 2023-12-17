import { Request, Response } from "express";
import WorkshopRegistration from "../models/workshop-registration.model";

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newWorkshopRegistration = request.body;
    console.log(newWorkshopRegistration);
    const workshopRegistration = await WorkshopRegistration.create(
      newWorkshopRegistration
    );
    return response.status(204).json(workshopRegistration);
  } catch (error) {
    return response.status(500).json(error);
  }
}
