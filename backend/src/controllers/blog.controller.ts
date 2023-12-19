import { Request, Response } from "express";
import Blog from "../models/blog.model";

export async function list(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const blogs = await Blog.find();
      return response.status(200).json(blogs);
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
      const blog = await Blog.findById(id);
      return response.status(200).json(blog);
    } catch (error) {
      return response.status(500).json({ message: (error as Error).message });
    }
  }
  
export async function create(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const newBlog = request.body;
      const blog = await Blog.create(newBlog);
      return response.status(204).json(blog);
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
      const newBlog = request.body;
      await Blog.findByIdAndUpdate(id, newBlog);
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
      await Blog.findByIdAndDelete(id);
      response.status(204).end();
    } catch (error) {
      response.status(500).json({ message: (error as Error).message });
    }
  }

