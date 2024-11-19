var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/ultimasn/", function (req, res) {
    medidaController.buscarUltimasNoticias(req, res);
});

router.get("/tempo-realn/", function (req, res) {
    medidaController.buscarNoticiasEmTempoReal(req, res);
});

module.exports = router;
