import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";


const wifiRouter = Router();

wifiRouter.use(jwtAutenticateMiddleware);
wifiRouter.post("/wifi", validateSchemaMiddleware);
wifiRouter.get("/wifi", );
wifiRouter.get("/wifi/:id",  );
wifiRouter.delete("/wifi/:id",  );

export default wifiRouter;