import { Request, Response } from "express";
import WorkshopRegistration from "../models/workshop-registration.model";

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newWorkshopRegistration = request.body;
    const workshopRegistration = await WorkshopRegistration.create(
      newWorkshopRegistration
    );
    return response.status(204).json(workshopRegistration);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function list(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const workshopRegistrations = await WorkshopRegistration.find();
    return response.status(200).json(workshopRegistrations);
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
    const workshopRegistration = await WorkshopRegistration.findById(id);
    return response.status(200).json(workshopRegistration);
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
      const updatedFields = request.body;

      const workshopForm = await WorkshopRegistration.findByIdAndUpdate(id, { $set: updatedFields }, { new: true });

      if (!workshopForm) {
          response.status(404).json({ message: "Workshop form not found" });
          return;
      }

      response.status(200).json(workshopForm);
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
    await WorkshopRegistration.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}