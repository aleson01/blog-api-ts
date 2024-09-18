import { Request, response, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { openDatabase, createTables } from '../../../db/database';

class postcontrollers{
    async getTodos(req:Request, res:Response){
        return response.json({ok:true})
    }

}
export {postcontrollers}
