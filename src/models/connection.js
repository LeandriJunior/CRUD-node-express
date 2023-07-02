const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
db_name = process.env.DB_DB
db_host = process.env.DB_HOST
db_user = process.env.DB_USER
db_password = process.env.DB_PASSWORD

const connection = new Sequelize(db_name, db_user, db_password,{
    host: db_host,
    dialect:'postgresql'
})
connection.authenticate().then(function(){
    console.log('Banco de dados conectado com sucesso!')
}).catch(function(err){
    console.log('Falha ao conectar ao banco de dados: '+ err)
});



module.exports = {connection, DataTypes};
