const express = require('express');
const app = express();
const PORT = 3000;

// Middlaware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Objeto simples em memória
const urls = {};

// Função Auxiliar para gerar um codigo aleatorio de 5 caracteres
function gerarCodigo(){
  return Math.random().toString(36).substring(2,7);
}

// Rota para encurtar a URL
app.post('/encurtar',(req, res) => {
  const { urlOriginal } = req.body;

  // 1. Validar se a URL foi enviado
  if (!urlOriginal){
    return res.status(400).json({erro: "A URL original é obrigatória!"});
  }

  // 2. Gerar um código curto unico
  const codigoCurto = gerarCodigo();

  // 3. Salvar a relação na memoria
  urls[codigoCurto] = urlOriginal;

  // 4. Retornar a URL encurtada para o usuario
  const urlEncurtada = `http://localhost:${PORT}/${codigoCurto}`;
  res.status(201 ).json({ urlOriginal, urlEncurtada });
});

// Rota para Redirecionar o codigo curto para a URL original
app.get('/:codigo', (req,res) => {
  const { codigo } = req.params;

  // 1. Buscar a URL original na memoria usando o codigo
  const urlOriginal = urls[codigo];

  //2. Verifica se o codigo existe
  if(!urlOriginal){
    return res.status(404).json({erro: "Codigo não encontrado!"});
  }

  // 3. Redirecionar o usuario para a URL original
  res.redirect(urlOriginal);
});

app.listen(PORT, () => {
  console.log(`Servidor do Encurtador rodando em http://localhost:${PORT}` );
});