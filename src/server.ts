/* eslint-disable no-console */
/* eslint-disable import/extensions */
import express from 'express';
// eslint-disable-next-line import/no-unresolved
import studentRouter from './routes/studentRoutes';
// eslint-disable-next-line import/no-unresolved
import convertRouter from './routes/convert';

const app = express();
const port = 9898;

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/convert', convertRouter);

app.listen(port, () => console.log(`Server started on port http://127.0.0.1:${port}`));
