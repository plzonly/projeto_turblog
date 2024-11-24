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
    const imagem = document.getElementById('imagem').files[0]; // Acessa o arquivo

    console.log("Dados capturados:", { titulo, descricao, imagem });

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    formData.append('imagem', imagem);

    const idUsuario = sessionStorage.ID_USUARIO;

    fetch(`http://localhost:3333/avisos/publicar/${idUsuario}`, {
        method: 'POST',
        body: formData,  // Corpo da requisição com os dados do formulário
    })
    .then(response => response.json())
    .then(data => {
        console.log("Postagem criada com sucesso:", data);
    })
    .catch(error => {
        console.error("Erro ao criar postagem:", error);
    });
}
