"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const { DB } = require("../../config/config"); // calling configuration enviromment variables of DB
const config = DB;
const db = {};

let sequelize;
sequelize = new Sequelize(config.NAME, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

fs.readdirSync(__dirname)
    .filter((file) => {
      return (
          file.indexOf(".") !== 0 &&
          file !== basename &&
          file.slice(-3) === ".js" &&
          file.indexOf(".test.js") === -1
      );
    })
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(
          sequelize,
          Sequelize.DataTypes
      );
      db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
