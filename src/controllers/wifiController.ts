import { Request, Response } from "express";
import wifiService from "../service/wifiService";


export async function createWifi(req: Request, res: Response){
    const { user } = res.locals;
    const wifi = req.body;

    await wifiService.createWifi(user, wifi);
    res.sendStatus(201);
}

export async function getAllWifi(req: Request, res: Response){
    const {user} = res.locals;
    const wifi = await wifiService.getAllWifi(user.id);

    res.send(wifi);
}