import { Router,Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../../db/database';

const comments = Router();

// Rota para adicionar um comentário a uma postagem
comments.post('/posts/:id/comments', async (req: Request, res: Response) => {

    const { id } = req.params;
    const { content } = req.body;
    const commentId = uuidv4();
    const db = await openDatabase();
    const post = await db.get('SELECT * FROM posts WHERE id = ?', id);
    
    if (post) {
        await db.run('INSERT INTO comments (id, postId, content) VALUES (?, ?, ?)', [commentId, id, content]);
        res.status(201).json({ commentId, postId: id, content });
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// Rota para obter todos os comentários de uma postagem
comments.get('/posts/:id/comments', async (req: Request, res:Response) => {
    const { id } = req.params;
    const db = await openDatabase();
    const comments = await db.all('SELECT * FROM comments WHERE postId = ?', id);
    res.json(comments);
});

export default comments;