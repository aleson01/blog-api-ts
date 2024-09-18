import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../../db/database';
import {postcontrollers} from "../controllers/postcontrollers";

const posts = Router();

// Rota para obter todas as postagens
posts.get('/posts', new postcontrollers().getTodos);

export {posts};