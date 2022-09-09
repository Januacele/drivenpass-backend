import { User } from "@prisma/client";
import { IUserData } from "../types/userTypes";
import { conflictError } from "../utils/errorUtils";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";

async function createUser(user:IUserData) {
    const existisUser = await authRepository.findUserByEmail(user.email);

    if(existisUser){
        throw conflictError("User already exist");
    }

    const SALT = 10;
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    await authRepository.insertUser({...user, password: hashedPassword});
}


const authService = {
    createUser
}

export default authService;