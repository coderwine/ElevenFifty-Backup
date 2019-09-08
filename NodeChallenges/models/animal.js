module.exports = (sequelize, DataTypes) => {
    const Animal =  sequelize.define('animal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numberOfLegs: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        predator: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    return Animal;
}

