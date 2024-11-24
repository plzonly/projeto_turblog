create database turblog;
use turblog;

CREATE TABLE usuario (
    idusuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    dtCad timestamp default current_timestamp
) auto_increment = 1;

CREATE TABLE postagem (
    idpostagem INT PRIMARY KEY auto_increment,
    titulopost VARCHAR(45),
    descricaopost VARCHAR(250),
    imagem VARCHAR(300),
    fkUsuario INT,
    CONSTRAINT fkPostagemUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario)
) auto_increment = 1000;

select * from usuario;
select * from postagem;
select * from aviso;

SELECT COUNT(*) AS quantidade_usuarios FROM usuario;

SELECT COUNT(*) AS quantidade_postagens FROM postagem;

truncate postagem;