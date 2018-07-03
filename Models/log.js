module.exports = function (sequelize, DataTypes){
    return sequelize.define('user', {
        username: DataTypes.STRING, 
        game: DataTypes.STRING,
        stakes: DataTypes.STRING,
        date: DataTypes.DATE
    });
};