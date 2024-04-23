const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const blogs = sequelize.define('bloglist',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement :true,
        allowNull : false,
        primaryKey : true
    },
    title:{
        type : Sequelize.STRING,
        allowNull:false
    },
    author:{
        type : Sequelize.STRING,
        allowNull :false
    },
    content:{
        type : Sequelize.STRING(2000),
        allowNull : false
    }
});

module.exports = blogs