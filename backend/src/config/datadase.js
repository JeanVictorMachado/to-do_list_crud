//segunda etapa

//importando monggose
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';

//conectando com o bando de dados
mongoose.connect(url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
