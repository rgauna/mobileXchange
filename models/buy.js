module.exports = (sequelize, DataTypes) => {
    var Buy = sequelize.define("buying", {
        phone_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        describes: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        total_price: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            isDecimal: true
        }
    });
    return Buy;
};