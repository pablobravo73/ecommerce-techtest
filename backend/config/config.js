require ('dotenv').config();


// module.exports = {
//   PORT: 3000,
//   DB: {
//     HOST:'postgres',
//     NAME: 'mydatabase',
//     PASSWORD: 'mypassword',
//     PORT: 5432,
//     USER: 'myuser',
//     DIALECT: 'postgres',
//     ENV: 'production',
//   },
// };



module.exports = {
  development: {
    dialect: 'postgres',
    host: 'postgres', //172.26.0.2
    port: 5432,
    username: 'myuser',
    password: 'mypassword',
    database: 'mydatabase',
  },
  production: {
    dialect: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'myuser',
    password: 'mypassword',
    database: 'mydatabase',
  },
};



