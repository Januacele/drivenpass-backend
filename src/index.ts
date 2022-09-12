import express, { json } from "express";
import "express-async-errors";
import router from "./routes/index";
import handleErrorsMiddleware from "./middlewares/handleErrorsMiddleware";

import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();
app.use(json());
app.use(router);
app.use(handleErrorsMiddleware);

const port = Number(process.env.PORT) || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})