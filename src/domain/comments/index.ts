import { Request,Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../db/database';

interface ITodo{
    title: string;
    completed: boolean;
}

export default{
    async getTodos(req: Request, res:Response) {
        const db = await openDatabase();
            const posts = await db.all('SELECT * FROM posts');
            return res.json(posts);
    }
}