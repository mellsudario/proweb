var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var usersDAO = require("../src/models/dao/usersDAO");

const uri =
"mongodb+srv://carolinadsz915:carolina@cluster0.5hg1yzn.mongodb.net/";

const client = new MongoClient(uri);

/* GET home page. */
router.get('/', async function(req, res, next) {
  // obter os dados dos livros
  const livros = await usersDAO.getLivros(client);
  console.log(livros)
  res.render('index');
});

module.exports = router;
