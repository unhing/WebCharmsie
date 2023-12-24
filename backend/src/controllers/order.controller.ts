import { Request, Response } from "express";
import Order from "../models/order.model";

export async function list(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const orders = await Order.find();
      return response.status(200).json(orders);
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
      const order = await Order.findById(id);
      return response.status(200).json(order);
    } catch (error) {
      return response.status(500).json({ message: (error as Error).message });
    }
  }

export async function create(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const newOrder = request.body;
      const order = await Order.create(newOrder);
      return response.status(204).json(order);
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

        const order = await Order.findByIdAndUpdate(id, { $set: updatedFields }, { new: true });

        if (!order) {
            response.status(404).json({ message: "Order not found" });
            return;
        }

        response.status(200).json(order);
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
      await Order.findByIdAndDelete(id);
      response.status(204).end();
    } catch (error) {
      response.status(500).json({ message: (error as Error).message });
    }
  }

