module.exports = function (sequelize, DataTypes) {
    var Sell = sequelize.define("Sell", {
        phone_make: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        models: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        asking_price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
            isDecimal: true
        }

    });
    return Sell;
};