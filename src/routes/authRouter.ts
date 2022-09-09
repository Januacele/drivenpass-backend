import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { userSchema } from "../schemas/authSchema";
import { signUp, signIn } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(userSchema), signUp );
authRouter.post("/signin", validateSchemaMiddleware(userSchema), signIn );


export default authRouter;