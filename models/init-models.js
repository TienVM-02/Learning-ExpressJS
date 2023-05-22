var DataTypes = require("sequelize").DataTypes;
var _bills = require("./bills");
var _orders = require("./orders");
var _products = require("./products");
var _users = require("./users");
var _users_detail = require("./users_detail");

function initModels(sequelize) {
  var bills = _bills(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_detail = _users_detail(sequelize, DataTypes);

  orders.belongsTo(bills, { as: "bill", foreignKey: "bill_id"});
  bills.hasMany(orders, { as: "orders", foreignKey: "bill_id"});
  orders.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(orders, { as: "orders", foreignKey: "product_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  users_detail.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasOne(users_detail, { as: "users_detail", foreignKey: "user_id"});

  return {
    bills,
    orders,
    products,
    users,
    users_detail,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
