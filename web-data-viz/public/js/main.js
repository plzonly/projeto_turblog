// main.js
document.querySelector('.custom-file-upload').addEventListener('click', function () {
    document.querySelector('#imagem').click();
});

function limparFormulario() {
    document.getElementById("form_postagem").reset();
}

function publicar() {
    const titulo = document.getElementById('titulo').value; // Acessa o campo título
    const descricao = document.getElementById('textarea_descricao').value; // Acessa o textarea
    const imagem = document.getElementById('linkImagem').value; // Acessa o arquivo

    console.log("Dados capturados:", { titulo, descricao, imagem });

    const idUsuario = sessionStorage.getItem('ID_USUARIO');

    fetch(`http://localhost:3333/avisos/publicar/${idUsuario}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulopost: titulo,
            descricaopost: descricao,
            imagem: imagem
        }),  // Corpo da requisição com os dados do formulário
    })
    .then(response => response.json())
    .then(data => {
        alert("Postagem criada com sucesso");
    })
    .catch(error => {
        console.error("Erro ao criar postagem:", error);
    });
}
