 module.exports = (sequelize, DataTypes) => {
     var Buy = sequelize.define("Buy", {
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
         },
         img_src: {
             type: DataTypes.STRING,
             allowNull: false,
             len: [1]
         }

     }, {

         timestamps: false
     });

     return Buy;
 };