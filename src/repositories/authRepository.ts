import { prisma } from "../config/database";
import { IUserData } from "../types/userTypes";

export async function insertUser(user: IUserData){
    return prisma.user.create({
        data: user,
    });
}

export async function findUserByEmail(email: string){
    return prisma.user.findUnique({
        where: {
            email,
        }
    });
}

export async function findById(id: number){
    return prisma.user.findUnique({
        where:{
            id
        }
    });
}