const express = require('express')
const cors = require('cors')
const data = require('./data/instructors')
const app = express()
const port = process.env.PORT || 3000
app.use(cors())

function findById(data, id) {
  var error = "falsenode "
  for (i=0;i<data.length;i++) {
    if (id == data[i].id) {
      return data[i]
    }
  }
  return false
}

app.get('/', function(req, res) {
  res.json({data})
})

app.get("/:id", function (req, res) {
  var instuctorById = findById(data, req.params.id)
  if (instuctorById) {
    res.json({"data": instuctorById})
  } else res.status(404).json({error: {"message": "No record found!"}})
})

app.listen(port)
