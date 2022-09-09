import { Request, Response } from "express";
import authService from "../service/authService";

export async function signUp(req: Request, res: Response){
    const user = req.body;
    await authService.createUser(user);
    res.sendStatus(201);
}


export async function signIn(req: Request, res: Response){
    const user = req.body;
    const token = ""
    res.send({token});
}