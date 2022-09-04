const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const fsPromisses = fs.promises
const port = 8000;
const app = express();

const usersRouter = require('./routes/users');

app.use(bodyParser.json());
app.use(cors({
    origin : "http://localhost:8080",
    credentials: true,
}))
app.use(usersRouter);

app.listen(port, () => {
	console.log('Servidor de exemplo aberto na porta: 8000')
})