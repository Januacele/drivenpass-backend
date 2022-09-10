import { Request, Response } from "express";
import safeNoteService from "../service/safeNoteService";


export async function createSafeNote(req: Request, res: Response){
    const {user} = res.locals;
    const credential = req.body;

    await safeNoteService.createSafeNote(user, credential);
    res.sendStatus(201);
}