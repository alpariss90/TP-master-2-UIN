const {Sequelize, DataTypes, QueryTypes} =require('sequelize')

const sequelize=new Sequelize('postgres://postgres:pass@localhost:5432/expressdb');

async function testConnection(){
    try {
        await sequelize.authenticate();
       // console.log("Connexion success");
    } catch (error) { 
        console.log("error connection "+error);
    }
}

module.exports={sequelize, DataTypes, QueryTypes}