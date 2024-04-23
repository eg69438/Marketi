module.exports = (sequelize, DataTypes) => {

    const Produktet = sequelize.define("Produktet", {
        emri: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cmimi: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        lloji: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pershkrimi: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Produktet;
}