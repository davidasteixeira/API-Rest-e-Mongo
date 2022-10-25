import express from "express";
import livrosController from "../controllers/livrosController.js";


const router = express.Router();

router
    .get('/livros', livrosController.listarLivros)
    .get('/livros/busca', livrosController.listarLivroPorEditora)
    .post('/livros', livrosController.cadastrarLivro)
    .put('/livros/:id', livrosController.atualizarLivro)
    .get('/livros/:id', livrosController.obterLivroPorId)
    .delete('/livros/:id', livrosController.excluirLivro)

export default router;