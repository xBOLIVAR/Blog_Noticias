import { News } from "../models";

export const getAllNews = async () => {
  return await News.findAll();
};

export const getNewsById = async (newsId: number) => {
  const news = await News.findByPk(newsId);
  if (!news) {
    throw new Error("Noticia no encontrada");
  }
  return news;
};

export const createNews = async (title: string, content: string) => {
  const news = await News.create({ title, content });
  return news;
};

export const updateNews = async (newsId: number, title: string, content: string) => {
  const news = await News.findByPk(newsId);
  if (!news) {
    throw new Error("Noticia no encontrada");
  }
  await news.update({ title, content });
  return news;
};

export const deleteNews = async (newsId: number) => {
  const news = await News.findByPk(newsId);
  if (!news) {
    throw new Error("Noticia no encontrada");
  }
  await news.destroy();
};
