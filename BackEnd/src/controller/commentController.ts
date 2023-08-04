import { Request, Response } from "express";
import { createComment, deleteComment, updateComment } from "../service/commentService";
import { getCommentsByNewsId } from "../service/commentService";

// Obtener todos los comentarios de una noticia específica
export const getCommentsByNewsIdController = async (req: Request, res: Response) => {
  try {
    const { newsId } = req.params;
    const comments = await getCommentsByNewsId(Number(newsId));
    return res.status(200).json(comments);
  } catch (error) {
    console.log("Error al obtener los comentarios:", error);
    return res.status(500).json({ error: "Error al obtener los comentarios" });
  }
};

// Crear un nuevo comentario asociado a una noticia específica
export const createCommentController = async (req: Request, res: Response) => {
  try {
    const { newsId } = req.params;
    const { content } = req.body;
    const comment = await createComment(Number(newsId), content);
    return res.status(201).json(comment);
  } catch (error) {
    console.log('Error al crear el comentario:', error);
    return res.status(500).json({ error: 'Error al crear el comentario' });
  }
};

// Actualizar un comentario por su ID
export const updateCommentController = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;
    const comment = await updateComment(commentId, content);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar el comentario" });
  }
};

// Eliminar un comentario por su ID
export const deleteCommentController = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    await deleteComment(commentId);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar el comentario" });
  }
};
