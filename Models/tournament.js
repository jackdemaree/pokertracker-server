module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tournament', {
        owner: DataTypes.INTEGER,


        game: DataTypes.STRING,
        buyIn: DataTypes.STRING,
        finish: DataTypes.STRING
    });
};