const express = require("express");
const connection=require('../server/database/database/index.js')
const routerbooks=require('../server/routes/books.js')
const routeruser=require('./routes/user.js')

const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use('/books', routerbooks)

app.use('/users', routeruser)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
