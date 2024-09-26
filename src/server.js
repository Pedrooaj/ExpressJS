import express from "express";
import { Routes } from "./routes.js";
import { MeuMiddleware } from "./middlewares/middleware.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.API_KEY, {}).then(() => {  
    app.emit("Pronto");
}
).catch((err) => {
        console.log("Erro ao conectar ao banco de dados", err);
        
    }
);

const app = express();
app.use(MeuMiddleware);
app.use(express.urlencoded({ extended: true }), Routes);


app.on("Pronto", () => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    })
})
