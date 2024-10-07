import express from 'express';
import donenv from 'donenv';
import connectDB from './config/db';
import userRouters from '/routers/userRouters';

donenv.config();
connectDB();

import app from express();
app.use(express.json());

app.use('/api', userRouters);

import PORT from process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));