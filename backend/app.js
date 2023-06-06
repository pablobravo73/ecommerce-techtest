const express = require('express');
const app = express();
//const cors = require("cors");

const HOST = '0.0.0.0';
const PORT = 3001;

//app.use(cors());

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
});
