import { Request, Response } from "express";
import  cardService from "../service/cardService";


export async function createCard(req: Request, res: Response){
    const {user} = res.locals;
    const credential = req.body;

    await cardService.createCard(user, credential);
    res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response){
    const {user} = res.locals;
    const credential = await cardService.getAllCards(user.id);

    res.send(credential);
}