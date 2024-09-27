import express from "express";
import { Routes } from "./routes.js";
import { MeuMiddleware } from "./middlewares/middleware.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "connect-flash"

dotenv.config();

const API_KEY = process.env.API_KEY;

mongoose.connect(API_KEY, {}).then(() => {  
    app.emit("Pronto");
}
).catch((err) => {
        console.log("Erro ao conectar ao banco de dados", err);
        
    }
);



const app = express();
app.use(MeuMiddleware);
const sessionOptions = session({
    secret: 'sla123',
    store: MongoStore.create({mongoUrl: API_KEY }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash());
app.use(Routes)

app.use(express.urlencoded({ extended: true }));



app.on("Pronto", () => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    })
})
