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

    // Sell.associate = (models) => {
    //     Sell.belongsTo(models.Buy, {
    //         foreingKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Sell;
};

// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.json");

// module.exports = (sequelize) => {
//     var Sell = sequelize.define("Sell", {
//         routeName: Sequelize.STRING,
//         phone_make: Sequelize.STRING,
//         models: Sequelize.STRING,
//         asking_price: Sequelize.STRING,
//         description: Sequelize.STRING,
//         email: Sequelize.STRING
//     }, {
//         freezeTableName: true
//     });
//     Sell.sync();
// };


// module.exports = Sell;