const medidaModel = require("../models/medidaModel");
const limite_linhas = 1;

function buscarUltimasMedidas(req, res) {
    
    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(limite_linhas)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar últimas medidas" });
        });
}

function buscarAntigoEmTempoReal(req, res) {

    console.log(`Recuperando o usuario mais antigo em tempo real`);

    medidaModel.buscarAntigoEmTempoReal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar usuario mais antigo em tempo real" });
        });
}

function buscarUltimoAntigo(req, res) {
    
    console.log(`Recuperando as último usuario antigo`);

    medidaModel.buscarUltimoAntigo()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar último usuario antigo" });
        });
}

function buscarUltimasDesc(req, res) {
    
    console.log(`Recuperando as últimas descrições`);

    medidaModel.buscarUltimasDesc()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar últimas descrições" });
        });
}

function buscarDescEmTempoReal(req, res) {

    console.log(`Recuperando as desrcrições em tempo real`);

    medidaModel.buscarDescEmTempoReal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar descrição em tempo real" });
        });
}

function buscarCarrosEmTempoReal(req, res) {

    console.log(`Recuperando os ultimos carros`);

    medidaModel.buscarCarrosEmTempoReal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar carros em tempo real" });
        });
}

function buscarMedidasEmTempoReal(req, res) {

    console.log(`Recuperando as últimas ${limite_linhas} medidas`);

    medidaModel.buscarMedidasEmTempoReal(limite_linhas)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar medidas em tempo real" });
        });
}

function buscarUltimasNoticias(req, res) {
    const limite_linhas = 3;
    console.log(`Recuperando os top ${limite_linhas} postadores`);

    medidaModel.buscarUltimasNoticias(limite_linhas)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar últimos postadores" });
        });
}

function buscarNoticiasEmTempoReal(req, res) {
    console.log("Recuperando postadores em tempo real");

    medidaModel.buscarNoticiasEmTempoReal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json({ mensagem: "Erro ao buscar postadores em tempo real" });
        });
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasDesc,
    buscarUltimoAntigo,
    buscarMedidasEmTempoReal,
    buscarUltimasNoticias,
    buscarDescEmTempoReal,
    buscarCarrosEmTempoReal,
    buscarAntigoEmTempoReal,
    buscarNoticiasEmTempoReal
};