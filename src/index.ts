import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from './db/database';
import {posts} from './domain/posts/routes/posts';

const app = express();
const port = 3000;

// Middleware para tratar JSON
app.use(express.json());

app.use(posts);
app.use(comments);

// Iniciar o banco de dados e criar tabelas
createTables();

// Iniciando o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});