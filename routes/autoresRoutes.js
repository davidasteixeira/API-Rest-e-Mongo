import express from "express";
import AutoresController from "../controllers/autoresController.js";


const router = express.Router();

router
    .get('/autores', AutoresController.listarautores)
    .post('/autores', AutoresController.cadastrarAutor)
    .put('/autores/:id', AutoresController.atualizarAutor)
    .get('/autores/:id', AutoresController.obteraAutorPorId)
    .delete('/autores/:id', AutoresController.excluirAutor)

export default router;