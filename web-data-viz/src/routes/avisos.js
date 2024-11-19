// var express = require("express");
// var router = express.Router();

// var avisoController = require("../controllers/avisoController");

// router.get("/listar", function (req, res) {
//     avisoController.listar(req, res);
// });

// router.get("/listar/:idUsuario", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

// router.get("/pesquisar/:descricao", function (req, res) {
//     avisoController.pesquisarDescricao(req, res);
// });

// router.post("/publicar/:idUsuario", function (req, res) {
//     avisoController.publicar(req, res);
// });

// router.put("/editar/:idAviso", function (req, res) {
//     avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });

// module.exports = router;
var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    console.log("entrei na rota")
    avisoController.publicar(req, res);

const upload = require('../config/configimagem'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD

router.get("", (req, res) => {
res.render("indexdash")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/publicar', upload.single('imagem'), (req, res) => {
  avisoController.publicar(req, res);
});

router.get('/:id', upload.single('imagem'), (req, res) => {
  avisoController.publicar(req, res);
});
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;