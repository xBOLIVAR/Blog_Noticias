import { Request, Response } from "express";
import { createNews, deleteNews, getAllNews, getNewsById, updateNews } from "../service/newService";

// Obtener todas las noticias
export const getAllNewsController = async (_req: Request, res: Response) => {
  try {
    const news = await getAllNews();
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener las noticias" });
  }
};


// Obtener una noticia por su ID
export const getNewsByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const news = await getNewsById(Number(id));
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener la noticia" });
  }
};

// Crear una nueva noticia
export const createNewsController = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const news = await createNews(title, content);
    return res.status(201).json(news);
  } catch (error) {
    console.log("🚀 ~ file: newsController.ts:33 ~ createNewsController ~ error:", error)
    return res.status(500).json({ error: "Error al crear la noticia" });
  }
};


// Actualizar una noticia por su ID
export const updateNewsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const news = await updateNews(Number(id), title, content);
    return res.status(200).json(news);
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar la noticia" });
  }
};

// Eliminar una noticia por su ID
export const deleteNewsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteNews(Number(id));
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar la noticia" });
  }
};
