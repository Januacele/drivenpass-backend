import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import * as authSchema from "../schemas/authSchema";
import { signUp, signIn } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(authSchema.userSchema), signUp );
authRouter.post("/signin", validateSchemaMiddleware(authSchema.loginSchema), signIn );


export default authRouter;