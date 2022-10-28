const express = require('express');
import {Request, Response} from 'express';
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});