const express = require("express");
const router = express.Router();

const ShowUsers = require('../controllers/show_users')
const InsertUsers = require('../controllers/insert_user')
const DeleteUsers = require('../controllers/delete_user')
const EditUsers = require('../controllers/edit_user')

//Adiciona o usuário
router.post("/usuarios", new InsertUsers().handler.bind(new InsertUsers));

//Mostra os usuários
router.get("/usuarios", new ShowUsers().handler.bind(new ShowUsers));

//Modifica o usuário
router.put("/usuarios/:id_usuario", new EditUsers().handler.bind(new EditUsers));

//Deleta o usuário
router.delete("/usuarios/:id_usuario", new DeleteUsers().handler.bind(new DeleteUsers));

module.exports = router;
