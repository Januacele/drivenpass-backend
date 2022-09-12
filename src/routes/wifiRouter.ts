import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { safeNoteSchema } from "../schemas/wifiSchema";
import { createWifi, getAllWifi, getAllWifiById, deleteCredential } from "../controllers/wifiController";


const wifiRouter = Router();

wifiRouter.use(jwtAutenticateMiddleware);
wifiRouter.post("/wifi", validateSchemaMiddleware(safeNoteSchema), createWifi);
wifiRouter.get("/wifi", getAllWifi);
wifiRouter.get("/wifi/:id", getAllWifiById);
wifiRouter.delete("/wifi/:id", deleteCredential);

export default wifiRouter;