const express = require('express')
const productRouter = require('./produtcs/products.route')
const db = require('./utils/database')
const app = express()
const initModels = require('./models/initmodels')
require('dotenv').config()

app.get('/', (req,res) =>{
    res.json({messaga:"serverOk"})
})
app.use(express.json())
app.use('/',productRouter)

db.authenticate()
  .then(()=>console.log('Database Authenticated!'))
  .catch(err => console.log(err))
db.sync()
  .then(() => console.log('Database Synced!'))
  .catch(err => console.log(err))


initModels()  

app.listen(process.env.PORT,()=>{
    console.log("server en funcion");
})