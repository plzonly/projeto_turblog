var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idusuario, nome, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql

//Adicionando a variavel 'carrofav'
function cadastrar(nome, email, senha, carrofav) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, carrofav);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;

    //Adicionando a variavel 'inserindoCarroFavorito' para inserir o carro escolhido pelo usuario no SQL
    var inserindoCarroFavorito = `
        INSERT INTO carro (nome) VALUES ('${carrofav}');   
    `

    //Adicionando o console.log para saber em qual etapa está e 'database.executar' para executar a função criada
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    console.log("Inserindo carro no SQL: \n" + inserindoCarroFavorito);
    database.executar(inserindoCarroFavorito);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};