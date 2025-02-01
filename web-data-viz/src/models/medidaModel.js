var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {
    
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS quantidade_usuarios
        FROM usuario
        LIMIT ${limite_linhas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarMedidasEmTempoReal() {
    var instrucaoSql = `
        SELECT
            COUNT(*) AS quantidade_usuarios
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarUltimasMedidas(limite_linhas) {
    
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS quantidade_usuarios
        FROM usuario
        LIMIT ${limite_linhas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarUltimoAntigo() {
    
    var ultimo = `
        SELECT u.nome as usuarioantigo
        FROM usuario u			
        WHERE u.dtCad = (SELECT MIN(dtCad) FROM usuario);
    `;
    console.log("Executando a ultimo: \n" + ultimo);
    return database.executar(ultimo)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarAntigoEmTempoReal() {
    var AntigoTempoReal = `
        SELECT u.nome as antigo
        FROM usuario u			
        WHERE u.dtCad = (SELECT MIN(dtCad) FROM usuario);
    `;
    console.log("Executando antigo em tempo real: \n" + AntigoTempoReal);
    return database.executar(AntigoTempoReal)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarUltimasDesc() {
    
    var UltimasDesc = `
        SELECT u.nome AS usuario
        FROM postagem as p
        JOIN usuario as u ON p.fkUsuario = u.idusuario			
        WHERE LENGTH(p.descricaopost) = (SELECT MAX(LENGTH(descricaopost)) FROM postagem);
    `;
    console.log("Executando a UltimasDesc: \n" + UltimasDesc);
    return database.executar(UltimasDesc)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarDescEmTempoReal() {
    var DescTempoReal = `
        SELECT u.nome AS usuario
        FROM postagem as p
        JOIN usuario as u ON p.fkUsuario = u.idusuario			
        WHERE LENGTH(p.descricaopost) = (SELECT MAX(LENGTH(descricaopost)) FROM postagem);
    `;
    console.log("Executando post com maior desc: \n" + DescTempoReal);
    return database.executar(DescTempoReal)
        .then(function (resultado) {
            return resultado;
        })
        .catch(function (erro) {
            throw erro;
        });
}

function buscarCarrosEmTempoReal() {
    var CarrosTempoReal = `SELECT 
        c.nome AS marca,
        COUNT(c.idCarro) AS total_carros
    FROM 
        carro as c
    GROUP BY 
        c.nome
    ORDER BY
	    total_carros DESC;`;
    console.log("Executando a instrução SQL: \n" + CarrosTempoReal);
    return database.executar(CarrosTempoReal);
}

function buscarUltimasNoticias(limite_linhas) {
    var instrucaoSql = `SELECT usuario.nome, COUNT(postagem.idpostagem) AS quantidade_posts 
    FROM usuario
    JOIN postagem ON usuario.idusuario = postagem.fkUsuario
    GROUP BY usuario.nome
    ORDER BY quantidade_posts DESC
    LIMIT ${limite_linhas};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarNoticiasEmTempoReal() {
    var instrucaoSql = `SELECT usuario.nome, COUNT(postagem.idpostagem) AS quantidade_posts 
    FROM usuario
    JOIN postagem ON usuario.idusuario = postagem.fkUsuario
    GROUP BY usuario.nome
    ORDER BY quantidade_posts DESC
    LIMIT 3;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasDesc,
    buscarUltimoAntigo,
    buscarMedidasEmTempoReal,
    buscarCarrosEmTempoReal,
    buscarDescEmTempoReal,
    buscarAntigoEmTempoReal,
    buscarUltimasNoticias,
    buscarNoticiasEmTempoReal
}

