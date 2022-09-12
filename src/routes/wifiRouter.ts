import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { safeNoteSchema } from "../schemas/wifiSchema";
import { createWifi, getAllWifi } from "../controllers/wifiController";


const wifiRouter = Router();

wifiRouter.use(jwtAutenticateMiddleware);
wifiRouter.post("/wifi", validateSchemaMiddleware(safeNoteSchema), createWifi);
wifiRouter.get("/wifi", getAllWifi);
wifiRouter.get("/wifi/:id",  );
wifiRouter.delete("/wifi/:id",  );

export default wifiRouter;