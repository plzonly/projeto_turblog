// const multer = require('multer');

// // Diretório onde os arquivos serão salvos
// // ATENÇÃO: É necessário manter o diretório 'public' para poder utilizar no front-end
// const diretorio = 'public/assets/';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, diretorio) 
//   },
  
//   filename: (req, file, cb) => {
//     const extensaoArquivo = file.originalname.split('.')[1];

//     const novoNomeArquivo = require('crypto')
//       .randomBytes(64)
//       .toString('hex');


//     cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
//   }
// });

// module.exports = multer({ storage });

const multer = require('multer');
const path = require('path');

// Configuração do Multer para o armazenamento da imagem
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/imgs'); // Diretório onde a imagem será salva
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Adiciona o timestamp ao nome do arquivo
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        // Verifica o tipo de arquivo, permitindo apenas imagens
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Somente arquivos de imagem são permitidos.'));
        }
    }
});
