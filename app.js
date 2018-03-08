const express = require('express')
const cors = require('cors')
const data = require('./data/cohorts.json')
const app = express()
const port = process.env.PORT || 3000
app.use(cors())

function findById(data, id) {
  var tempObject = {}
  var error = "false"
  for (i=0;i<data.length;i++) {
    if (id == data[i].id) {
      return data[i]
    }
  }
  return false
}

app.get('/', function(req, res) {
  res.send({data})
})

app.get("/:id", function (req, res) {
  var cohortById = findById(data, req.params.id)
  if (cohortById) {
    res.send({"data": cohortById})
  } else res.status(404).json({error: {"message": "No record found!"}})
})



app.listen(port)
