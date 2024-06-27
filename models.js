const {sequelize, DataTypes, QueryTypes}=require('./provider')


const Region=sequelize.define('region',{
    code:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    libelle:{
        type: DataTypes.STRING,
        allowNull: false
    } 
},{
    freezeTableName: true
});


const Utilisateur=sequelize.define('utilisateur',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mail:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nom_prenom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    region:{
        type: DataTypes.STRING,
        references:{
            model: Region,
            key: 'code',

        }
    }
},
{
    freezeTableName: true
});


module.exports={Utilisateur, Region, sequelize, QueryTypes}