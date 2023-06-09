//const { PORT } = require("./config/config");
const { db } = require("./config/database")

require ('dotenv').config();

const express = require("express");
const app = express();



//const express = require('express');
//const app = express();
//const cors = require("cors");

const { Pool } = require('pg')
const pool = new Pool({
  user: 'myuser',
  host: 'postgres',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
})

app.get('/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
});


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
