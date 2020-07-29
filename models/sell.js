module.exports = function (sequelize, DataTypes) {
    var Sell = sequelize.define("Sell", {
        phoneName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        descriptions: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        selling_price: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            isDecimal: true
        }
    });
    return Sell;
};