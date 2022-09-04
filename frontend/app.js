const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
app.use(cors());

app.use(express.static('src/pages/home'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));