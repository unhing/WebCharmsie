import { Request, Response } from "express";
import ContactForm from "../models/contact-form.model";

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newContactForm = request.body;
    const contactForm = await ContactForm.create(newContactForm);
    return response.status(204).json(contactForm);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function list(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const contactForms = await ContactForm.find();
    return response.status(200).json(contactForms);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function remove(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    await ContactForm.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}
