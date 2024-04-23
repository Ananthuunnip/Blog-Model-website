const Sequelize = require('sequelize');

const sequelize = new Sequelize('blog','root','ROOT',{
    dialect:"mysql",
    host : 'localhost'
});
module.exports = sequelize;
