var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            p.idpostagem AS idPostagem,
            p.titulopost,
            p.descricaopost,
            p.imagem,
            p.fkUsuario,
            u.idusuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem AS p
            INNER JOIN usuario AS u
                ON p.fkUsuario = u.idusuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
            SELECT 
            p.idpostagem AS idPostagem,
            p.titulopost,
            p.descricaopost,
            p.fkUsuario,
            u.idusuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem AS p
            INNER JOIN usuario AS u
                ON p.fkUsuario = u.idusuario;
                WHERE p.descricaopost LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
            SELECT 
            p.idpostagem AS idPostagem,
            p.titulopost,
            p.descricaopost,
            p.imagem,
            p.fkUsuario,
            u.idusuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM postagem AS p
            INNER JOIN usuario AS u
                ON p.fkUsuario = u.idusuario;
                WHERE u.idusuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, imagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO postagem (titulopost, descricaopost, imagem, fkUsuario) VALUES ('${titulo}', '${descricao}', '${imagem}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucaoSql = `
        UPDATE postagem SET descricaopost = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM postagem WHERE idpostagem = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarCarro(carrofav, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarCarro():", carrofav, idUsuario);

    var inserindoCarroFavorito = `
    INSERT INTO carro (nome, fkUsuario) VALUES ('${carrofav}', '${idUsuario}');   
    `

    //Adicionando o console.log para saber em qual etapa está e 'database.executar' para executar a função criada
    console.log("Executando a InserindoCarroFavorito: \n" + inserindoCarroFavorito);
    return database.executar(inserindoCarroFavorito);
}

function contarCarros (idUsuario) {
    
    var contarCarros = `
        SELECT count(fkUsuario) as 'relacao' from carro where fkUsuario = '${idUsuario}'; 
    `

    return database.executar(contarCarros);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    cadastrarCarro,
    contarCarros
}
