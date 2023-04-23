const {Sequelize} = require('sequelize');

const config = require('../../config')

//const enviorment = config.nodeEnv

const db = new Sequelize(config.db[prod])

 module.exports= db
