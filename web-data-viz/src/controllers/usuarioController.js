var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                    
                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    
                        res.json({
                            idusuario: resultadoAutenticar[0].idusuario,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            nome: resultadoAutenticar[0].nome
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

async function cadastrar(req, res) {
    try {
        let { nomeServer: nome, emailServer: email, senhaServer: senha} = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).send("Todos os campos são obrigatórios!");
        }

        let resultado = await usuarioModel.cadastrar(nome, email, senha);
        res.json(resultado);

    } catch (erro) {
        console.log("Erro ao cadastrar:", erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro desconhecido" });
    }
}

module.exports = {
    autenticar,
    cadastrar
}