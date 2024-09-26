import express from "express";
import { Routes } from "./routes.js";
import { MeuMiddleware } from "./middlewares/middleware.js"

export const app = express();
app.use(MeuMiddleware);
app.use(express.urlencoded({ extended: true }), Routes);



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})