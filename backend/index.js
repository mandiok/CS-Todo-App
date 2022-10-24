const express = require('express')
const app = express()
const port = 3001

var todoArray = []

// Einbindung oberhalb der Endpoint Funktionen
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// get alle todos 
app.get('/todos', (req, res) => {
  res.status(200),send(todoArray);
})

// post einzelnes todo
app.post('/todo', (req, res) => {

})

app.get('/health-check',  (req, res) => {
  res.status(200).send('Health check ok!')
})

// CRUD - create, read, update, delete

// read:
// GET - Route, keine Parameter oder Queries notwendig
// möglicher Name: "/todos"
// alle Todos liefern an React App (Array)

// create:
// POST - Route, keine Parameter oder Queries nötig
// möglicher Name: "/todo"
// ein neues Todo aus React bekommt und hier im Backend dem Array hinzufügt

// update: 
// PUT - Route, Parameter/Query notwendig: id
// möglicher Name: "/todo"
// ein vorhandenes Todo findet und den key "done" toggled (true auf false und umgekehrt)

// delete:
// DELETE - Route, Parameter/Query notwendig: id
// möglicher Name: "/todo"
// ein vorhandenes Todo findet und aus dem Array herauslöscht

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
