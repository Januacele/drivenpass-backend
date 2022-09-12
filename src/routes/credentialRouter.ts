import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";
import { createCredential, getAllCredential, getOneCredential, deleteCredential } from "../controllers/credentialController";


const credentialRouter = Router();

credentialRouter.use(jwtAutenticateMiddleware);
credentialRouter.post("/credential", validateSchemaMiddleware(credentialSchema), createCredential);
credentialRouter.get("/credential", getAllCredential);
credentialRouter.get("/credential/:id", getOneCredential );
credentialRouter.delete("/credential/:id", deleteCredential );

export default credentialRouter;