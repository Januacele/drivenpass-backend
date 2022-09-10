import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "../setup";

import authService from "../service/authService";
import { unauthorizedError } from "../utils/errorUtils";


export async function jwtAutenticateMiddleware(req: Request, res: Response, next: NextFunction) {
        const authorization = req.headers["authorization"];
        if(!authorization) throw unauthorizedError("Missin authorization");
    
        const token = authorization.replace("Bearer ", "");
        if (!token) throw unauthorizedError("Missing token");
        
        try {
            const SECRET: string | any = process.env.JWT_SECRET;
            const { userId } = jwt.verify(token, SECRET) as { userId: number };
            const user = await authService.findUserById(userId);
            res.locals.user = user;
            next();
        } catch (error) {
            throw unauthorizedError("Invalid token");
        }
    }
    