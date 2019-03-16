const mongoose = require('mongoose')
mongoose.Promise = global.Promise //api de promise do mongoose usará api de promise do node

module.exports = mongoose.connect('mongodb://localhost/todo')
