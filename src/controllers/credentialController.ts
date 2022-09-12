import { Request, Response } from "express";
import  credentialService from "../service/credentialService";


export async function createCredential(req: Request, res: Response){
    const {user} = res.locals;
    const credential = req.body;

    await credentialService.createCredential(user, credential);
    res.sendStatus(201);
}

export async function getAllCredential(req: Request, res: Response){
    const {user} = res.locals;
    const credential = await credentialService.getAllCredential(user.id);

    res.send(credential);
}

export async function getOneCredential(req: Request, res: Response){
    const {user} = res.locals;
    const credentialId = parseInt(req.params.id);
    if(isNaN(credentialId)){
        res.status(422).send("Id must be a number");
    }

    const credentials = await credentialService.getOneCredential(user.id, credentialId);

    res.send(credentials);
}