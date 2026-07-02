var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meu Portfólio Minimalista | Home' });
});

/* GET Artigos e Textos. */
router.get('/artigos', function(req, res, next) {
  res.render('artigos', { title: 'Artigos e Textos | Portfólio' });
});

/* GET Projetos. */
router.get('/projetos', function(req, res, next) {
  res.render('projetos', { title: 'Projetos | Portfólio' });
});

/* GET Página de Leitura Individual (Artigo ou Projeto). */
// Em um projeto real, você usaria um ID na rota, ex: '/artigo/:id'
router.get('/leitura', function(req, res, next) {
  res.render('leitura', { title: 'Lendo Publicação | Portfólio' });
});

/* GET Sobre Mim. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre Mim | Portfólio' });
});

/* GET Contato. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato | Portfólio' });
});

module.exports = router;
