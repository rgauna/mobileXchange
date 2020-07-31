// 'use strict';
// const faker = require("faker");
// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     let data = [];
//     let amount = 10;

//     while (amount--) {
//       data.push({
//         phone_name: "Iphone 11 pro max",
//         describes: "The iPhone 11 Pro and iPhone 11 Pro Max use a Super Retina XDR display.",
//         total_price: 1100,
//         img_src: "https://i.imgur.com/4AKsRqa.jpg",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       });
//     }
//     return queryInterface.bulkInsert("Buy", data, {});
//   },

//   down: function (queryInterface, Sequelize) {
//     return queryInterface.bulkDelete('Buy', null, {});
//   }
// };