module.exports = function (sequelize, DataTypes){
    return sequelize.define('user', {
        typeofgame: DataTypes.STRING, 
        description: DataTypes.STRING
    });
};