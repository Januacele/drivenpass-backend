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
    const card = await cardService.getAllCards(user.id);

    res.send(card);
}

export async function getOneCard(req: Request, res: Response){
    const {user} = res.locals;
    const cardId = parseInt(req.params.id);
    if(isNaN(cardId)){
        res.status(422).send("Id must be a number");
    }

    const cards = await cardService.getOneCard(user.id, cardId);

    res.send(cards);
}