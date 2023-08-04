import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import * as newsController from './controller/newsController';
import * as commentController from './controller/commentController';
import { syncDatabase } from './database';

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// Rutas para noticias
app.get('/news', newsController.getAllNewsController);
app.get('/news/:id', newsController.getNewsByIdController);
app.post('/news', newsController.createNewsController);
app.put('/news/:id', newsController.updateNewsController);
app.delete('/news/:id', newsController.deleteNewsController);

// Rutas para comentarios
app.get('/news/:newsId/comments', commentController.getCommentsByNewsIdController );
app.post('/news/:newsId/comments', commentController. createCommentController);
app.put('/comments/:commentId', commentController.updateCommentController);
app.delete('/comments/:commentId', commentController.deleteCommentController);

syncDatabase();

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
