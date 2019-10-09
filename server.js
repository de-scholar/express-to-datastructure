import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT;

app.get('/', (request, response) => {
  response.status(200).send({ message: 'Wow! Welcome to the new world!' });
});

app.listen(port);
