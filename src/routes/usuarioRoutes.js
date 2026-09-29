import express from "express";

import {
  criar,
  listar,
  atualizar,
  deletar
} from "../controllers/usuarioController.js";

const router = express.Router();


// CREATE
router.post("/", criar);


// READ
router.get("/", listar);


// UPDATE
router.put("/:id", atualizar);


// DELETE
router.delete("/:id", deletar);


export default router;