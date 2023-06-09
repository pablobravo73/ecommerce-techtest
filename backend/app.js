//const { PORT } = require("./config/config");
const { db } = require("./config/database")

require ('dotenv').config();

const express = require("express");
const app = express();



//const express = require('express');
//const app = express();
//const cors = require("cors");







const HOST = '0.0.0.0';
const PORT = 3000;

//app.use(cors());

// Definir una ruta de ejemplo

app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

db.sync().then(async () => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
});
