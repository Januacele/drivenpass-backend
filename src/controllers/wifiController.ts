import { Request, Response } from "express";
import { parse } from "path";
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

export async function getAllWifiById(req: Request, res: Response){
    const {user} = res.locals;
    const wifiId = parseInt(req.params.id);
    if(isNaN(wifiId)){
        res.status(422).send("Id must be a number");
    }
    const wifi = await wifiService.getOneWifi(user.id, wifiId);

    res.send(wifi);
}