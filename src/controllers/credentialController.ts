import { Request, Response } from "express";
import  credentialService from "../service/credentialService";


export async function createCredential(req: Request, res: Response){
    const {user} = res.locals;
    const credential = req.body;

    await credentialService.createCredential(user, credential);
    res.sendStatus(201);
}