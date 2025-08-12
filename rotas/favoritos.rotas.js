import { Router } from "express";
import {
  getFavoritos,
  postFavorito,
  deleteFavorito,
} from "../controladores/favoritos.controle.js";

const favoritoRouter = Router();

favoritoRouter.get("/favoritos", getFavoritos);

favoritoRouter.post("/favoritos/:id", postFavorito);

favoritoRouter.delete("/favoritos/:id", deleteFavorito);

export default favoritoRouter;
