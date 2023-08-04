import app from '../src/app';
import supertest from 'supertest';
import { syncDatabase } from '../src/database';

describe('News Controller', () => {

  it('should create a new news', async () => {
    await syncDatabase();
    const title = 'Test News';
    const content = 'This is a test news';
    const response = await supertest(app)
      .post('/news')
      .send({ title, content });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(title);
    expect(response.body.content).toBe(content);
  });
  
  it('should get all news', async () => {
    const response = await supertest(app).get('/news');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a specific news by ID', async () => {
    const newsId = 1;
    const response = await supertest(app).get(`/news/${newsId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(newsId);
  });

  it('should update an existing news', async () => {
    const newsId = 1;
    const title = 'Updated News';
    const content = 'This news has been updated';
    const response = await supertest(app)
      .put(`/news/${newsId}`)
      .send({ title, content });
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(newsId);
    expect(response.body.title).toBe(title);
    expect(response.body.content).toBe(content);
  });

/*   it('should delete an existing news', async () => {
    const newsId = 1;
    const response = await supertest(app).delete(`/news/${newsId}`);
    expect(response.status).toBe(204);
    // Ensure the news is deleted (you can add additional checks if needed)
    const deletedNewsResponse = await supertest(app).get(`/news/${newsId}`);
    expect(deletedNewsResponse.status).toBe(404);
  }); */
});