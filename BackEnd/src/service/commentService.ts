import { Comment, News } from "../models";
import { v4 as uuidv4 } from 'uuid';

export const getCommentsByNewsId = async (newsId: number) => {
  const news = await News.findByPk(newsId);
  if (!news) {
    throw new Error("Noticia no encontrada");
  }
  const comments = await Comment.findAll({ where: { newsId } });
  return comments;
};

export const createComment = async (newsId: number, content: string) => {
  const news = await News.findByPk(newsId);
  if (!news) {
    throw new Error('Noticia no encontrada');
  }

  const comment = await Comment.create({ id: uuidv4(), content, newsId });
  return comment;
};

export const updateComment = async (commentId: string, content: string) => {
  const comment = await Comment.findByPk(commentId);
  if (!comment) {
    throw new Error("Comentario no encontrado");
  }
  await comment.update({ content });
  return comment;
};

export const deleteComment = async (commentId: string) => {
  const comment = await Comment.findByPk(commentId);
  if (!comment) {
    throw new Error("Comentario no encontrado");
  }
  await comment.destroy();
};
