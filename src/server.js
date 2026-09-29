import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {pool} from "./config/db.js"

import usuarioRoutes from "./routes/usuarioRoutes.js";

dotenv.config();

const app = express();

const PORT = 3002;


// Middlewares
app.use(cors());
app.use(express.json());


// Rotas
app.use("/", usuarioRoutes);


// Servidor
app.listen(PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${PORT}`, pool.host

  );
});

