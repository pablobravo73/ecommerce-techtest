const { DB } = require('./config');
const { Sequelize } = require('sequelize');
const pg = require('pg');

const db = new Sequelize({
  database: 'mydatabase',
  username: 'myuser',
  password: 'mypassword',
  host: 'postgres',
  port: 5432,
  dialect: 'postgres',
});

module.exports = { db };
