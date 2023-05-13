const express = require('express')
const productRouter = require('./produtcs/products.route')
const ventasRouter = require('../src/ventas/ventas.router')
const db = require('./utils/database')
const app = express()
const initModels = require('./models/initmodels')
//require('dotenv').config()

app.get('/', (req,res) =>{
    res.json({messaga:"serverOk"})
})
app.use(express.json())
app.use('/',productRouter)
app.use('/',ventasRouter)

db.authenticate()
  .then(()=>console.log('Database Authenticated!'))
  .catch(err => console.log(err))
db.sync()
  .then(() => console.log('Database Synced!'))
  .catch(err => console.log(err))


initModels()  

app.listen(process.env.PORT || 3000,()=>{
    console.log("server en funcion");
})