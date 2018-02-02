const express = require('express')
const app = express()

app.get('/', (req, res) =>
  res.send("<h1 id='ce-greeting'>Hello World</h1>")
)

app.get('/kelvin', (req, res) =>
  res.send("<h1 id='ce-greeting'>Hello Kelvin</h1>")
)

app.get('/crystabel', (req, res) =>
  res.send("<h1 id='ce-greeting'>Hello Crystabel</h1>")
)

app.get('/kevin', (req, res) =>
  res.send("<h1 id='ce-greeting'>Hello Kevin</h1>")
)

app.get('/greetings/KELVIN` ', (req, res) =>
  res.send("<h1 id='ce-greeting'>Greetings Kelvin</h1>")
)

app.get('/greetings/crystabel', (req, res) =>
  res.send("<h1 id='ce-greeting'>Greetings Crystabel</h1>")
)

app.get('/welcome/brian', (req, res) =>
  res.send("<h1 id='ce-greeting'>Welcome Brian</h1>")
)

app.get('/goodbye/crystabel', (req, res) =>
  res.send("<h1 id='ce-greeting'>Goodbye Crystabel</h1>")
)

app.get('/howdy/kelvin', (req, res) =>
  res.send("<h1 id='ce-greeting'>Howdy Kelvin</h1>")
)

app.get('/howdy/crystabel', (req, res) =>
  res.send("<h1 id='ce-greeting'>Howdy Crystabel</h1>")
)

app.get('/hi/CLINT', (req, res) =>
  res.send("<h1 id='ce-greeting'>Hi Clint</h1>")
)

app.listen(3000, () => console.log('Port 3000!'))
