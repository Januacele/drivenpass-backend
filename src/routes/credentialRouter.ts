import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";
import { createCredential } from "../controllers/credentialController";


const credentialRouter = Router();

credentialRouter.use(jwtAutenticateMiddleware);
credentialRouter.post("/credential", validateSchemaMiddleware(credentialSchema), createCredential);
credentialRouter.get("/credential", );
credentialRouter.get("/credential/:id", );
credentialRouter.delete("/credential/:id", );

export default credentialRouter;