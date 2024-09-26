import { Router } from "express";
import { ReqQuery } from "./controllers/ReqQuery.js";
import { ReqParamsGet } from "./controllers/ReqParams.js";
import { ReqbodyGet, ReqbodyPost } from "./controllers/ReqBody.js";
import HomeModel from "./models/homeModule.js";

export const Routes = Router();

HomeModel.create({
    titulo: "Apenas um Teste",
    descricao: "Descrição..."
}).then(dados => console.log(dados)).catch(err => console.log(err));

// Exemplo de req.query
Routes.get('/consulta', ReqQuery);

// Exemplo de req.params
Routes.get("/teste/:id", ReqParamsGet);

// Exemplo de Get e Post com req.body
Routes.get("/", ReqbodyGet);
Routes.post("/", ReqbodyPost);