import { IUserData } from "../types/userTypes";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../setup";
import { object } from "joi";


async function createUser(user:IUserData) {
    const existisUser = await authRepository.findUserByEmail(user.email);
    if(existisUser) throw conflictError("User already exist");

    const SALT = 10;
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    await authRepository.insertUser({...user, password: hashedPassword});
}


async function checkLogin(login:IUserData) {
    const user =  await authRepository.findUserByEmail(login.email);
    if(!user) throw unauthorizedError("Invalid data credentials");

    const verifyPassword = bcrypt.compareSync(login.password, user.password);
    if(!verifyPassword) throw unauthorizedError("Invalid data credentials");

    return user;
}


async function login(login: IUserData){
    const user = await checkLogin(login);
    const token = jwt.sign({ userId: user.id }, (process.env.JWT_SECRET)!);

    return token;
}

async function findUserById(id: number){
    const verifyUserById = await authRepository.findById(id);
    if(!verifyUserById) throw notFoundError("User not found");

    return verifyUserById;
}




const authService = {
    createUser,
    login,
    findUserById
}

export default authService;