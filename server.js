import express from 'express';
import dotenv from 'dotenv';
import ReflectionController from './src/controllers/ReflectionController';

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT;

app.get('/', (request, response) => {
  response.status(200).send({ message: 'Wow! Welcome to the new world!' });
});

app.post('/api/v1/reflections', ReflectionController.create);
app.get('/api/v1/reflections', ReflectionController.getAll);
app.get('/api/v1/reflections/:id', ReflectionController.getOne);
app.put('/api/v1/reflections/:id', ReflectionController.update);
app.delete('/api/v1/reflections/:id', ReflectionController.delete);

app.listen(port);
