var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulopost;
    var descricao = req.body.descricaopost;
    var imagem = req.body.imagem;
    var idUsuario = req.params.idUsuario;
    console.log("Como veio: "+ titulo, descricao, imagem, idUsuario)

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (imagem == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    }else {
        console.log("Como será salvo: "+ imagem)
        avisoModel.publicar(titulo, descricao, imagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function suporte(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idusuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avisoModel.publicar(titulo, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var idAviso = req.params.idAviso;

    avisoModel.editar(novaDescricao, idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idAviso = req.params.idAviso;

    avisoModel.deletar(idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

async function cadastrarCarro(req, res) {
    try {
        var carro = req.body.carroServer;
        var idUsuario = req.body.idUsuario;
        
        console.log('entrou na function cadastrarCarro', carro, idUsuario, req.body)
        
        if (carro == '#') {
            return res.status(400).send("Preencha o campo!");
        }


        let resultado = await avisoModel.cadastrarCarro(carro, idUsuario);
        res.json(resultado);

    } catch (erro) {
        console.log("Erro ao cadastrar:", erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro desconhecido" });
    }
}

function contarCarros(req, res){
    var idUsuario = req.params.idUsuario;

    avisoModel.contarCarros(idUsuario).then(
        function(resultado){
            console.log(resultado)
            res.json(resultado);
        }
    )

    .catch (function(resultado){
        console.log(resultado)
        res.json(resultado);
    })
    
}

module.exports = {
    listar,
    listarPorUsuario,
    publicar,
    publicar,
    editar,
    deletar,
    cadastrarCarro,
    contarCarros
}