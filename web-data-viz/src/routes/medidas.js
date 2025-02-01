var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimasdesc/", function (req, res) {
    medidaController.buscarUltimasDesc(req, res);
});

router.get("/ultimasantigo/", function (req, res) {
    medidaController.buscarUltimoAntigo(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/tempo-realcarro/", function (req, res) {
    medidaController.buscarCarrosEmTempoReal(req, res);
});

router.get("/ultimasn/", function (req, res) {
    medidaController.buscarUltimasNoticias(req, res);
});

router.get("/tempo-realn/", function (req, res) {
    medidaController.buscarNoticiasEmTempoReal(req, res);
});

router.get("/tempo-realdesc/", function (req, res) {
    medidaController.buscarDescEmTempoReal(req, res);
});

router.get("/tempo-realantigo/", function (req, res) {
    medidaController.buscarAntigoEmTempoReal(req, res);
});

module.exports = router;
