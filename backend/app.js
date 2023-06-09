const { db } = require("./config/database");
require('dotenv').config();

const express = require("express");
const app = express();

const HOST = '0.0.0.0';
const PORT = 3000;

app.use(express.json());


const inventoryRoutes = require("./routes/inventoryRoutes");
const authRoutes = require("./routes/authRoutes");


const authenticateUser = require("./middleware/authenticateUser");


app.use("/inventory", authenticateUser, inventoryRoutes);


app.use("/auth", authRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

db.sync().then(async () => {
  app.listen(PORT, HOST, () => console.log(`Server is running on ${HOST}:${PORT}`));
});
