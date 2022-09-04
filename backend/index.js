const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors({
  origin : "http://localhost:8080",
  credentials: true,
}))

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
