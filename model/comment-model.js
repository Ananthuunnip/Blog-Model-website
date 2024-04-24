const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const user = require('../model/comment-model')
const comments = sequelize.define('comments',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement :true,
        allowNull : false,
        primaryKey : true
    },
    comment:{
        type : Sequelize.STRING,
        allowNull:false
    }
});

module.exports = comments