import { Request, Response } from "express";
import safeNoteService from "../service/safeNoteService";


export async function createSafeNote(req: Request, res: Response){
    const {user} = res.locals;
    const credential = req.body;

    await safeNoteService.createSafeNote(user, credential);
    res.sendStatus(201);
}

export async function getAllSafeNotes(req: Request, res: Response){
    const {user} = res.locals;
    const safeNotes = await safeNoteService.getAllSafeNotes(user.id);

    res.send(safeNotes);
}

export async function getOneSafeNote(req: Request, res: Response){
    const {user} = res.locals;
    const safeNoteId = parseInt(req.params.id);
    if(isNaN(safeNoteId)){
        res.status(422).send("Id must be a number");
    }

    const safeNote = await safeNoteService.getOneSafeNote(user.id, safeNoteId);

    res.send(safeNote);
}

export async function deleteSafeNote(req: Request, res: Response){
    const {user} = res.locals;
    const safeNoteId = parseInt(req.params.id);
    if(isNaN(safeNoteId)){
        res.status(422).send("Id must be a number");
    }

    await safeNoteService.deleteSafeNote(user, safeNoteId);
    res.sendStatus(200);
}