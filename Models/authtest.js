module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', {
        owner: DataTypes.INTEGER,

        result: DataTypes.STRING,
        description: DataTypes.STRING,
        def: DataTypes.STRING
    });
};