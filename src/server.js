const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (_, res) => {
  res.send(db.getAllProd())
})

app.get('/produtos/:id', (req, res) => {
  res.send(db.getProd(req.params.id))
})

app.post('/produtos', (req, res) => {
  const prod = db.addProd({
    name: req.body.name,
    price: req.body.price
  })
  res.send(prod)
})

app.put('/produtos/:id', (req, res) => {
  const prod = db.deleteProd(req.params.id)
  res.send(prod)
})

app.listen(port, () => {
  console.log('Servidor está Online!')
})
