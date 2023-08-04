import { syncDatabase } from '../src/database';
import * as newsService from '../src/service/newService';

describe('News Service', () => {
  let createdNewsId: number;
  
  
  it('should create a new news', async () => {
    await syncDatabase();
    const title = 'Test News';
    const content = 'This is a test news';
    const createdNews = await newsService.createNews(title, content);
    expect(createdNews.title).toBe(title);
    expect(createdNews.content).toBe(content);

    createdNewsId = createdNews.id;
  });

  it('should return an array of news', async () => {
    const news = await newsService.getAllNews();
    expect(Array.isArray(news)).toBe(true);
  });

  it('should return a specific news by ID', async () => {
    const news = await newsService.getNewsById(createdNewsId);
    expect(news).toBeDefined();
    expect(news!.id).toBe(createdNewsId);
  });

  it('should update an existing news', async () => {
    const title = 'Updated News';
    const content = 'This news has been updated';
    const updatedNews = await newsService.updateNews(createdNewsId, title, content);
    expect(updatedNews.id).toBe(createdNewsId);
    expect(updatedNews.title).toBe(title);
    expect(updatedNews.content).toBe(content);
  });
});
