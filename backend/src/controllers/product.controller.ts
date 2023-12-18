import { Request, Response } from "express";
import Product from "../models/product.model";

export async function paginate(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const { page, size, limitPrice, category } = request.query;
    const filter: Record<string, unknown> = {};

    if (limitPrice) {
      filter["price"] = { $lte: parseInt(limitPrice as string) };
    }

    if (category) {
      filter["category"] = category;
    }

    const skip = (parseInt(page as string) - 1) * parseInt(size as string);
    const limit = parseInt(size as string);
    const productsPromise = Product.find(filter).skip(skip).limit(limit).exec();
    const totalCountPromise = Product.countDocuments(filter);
    const [products, totalCount] = await Promise.all([
      productsPromise,
      totalCountPromise,
    ]);
    return response.status(200).json({
      result: products,
      totalCount,
    });
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function list(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const products = await Product.find();
    return response.status(200).json(products);
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
    const product = await Product.findById(id);
    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json({ message: (error as Error).message });
  }
}

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newProduct = request.body;
    const product = await Product.create(newProduct);
    return response.status(204).json(product);
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
    const newProduct = request.body;
    await Product.findByIdAndUpdate(id, newProduct);
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
    await Product.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ message: (error as Error).message });
  }
}
