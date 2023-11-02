const Sequelize = require("sequelize");

const Orders = require("./Orders");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize)
db.Orders = require("./Orders")(sequelize, Sequelize)

db.Customer.hasMany(db.Orders,{
    //onDelet:"CASCADE",
    foreignKey:"custid",
    //sourceKey:"custid" 같으면 안써도 상관없음
})

db.Orders.belongsTo(db.Customer,{
    //onDelet:"CASCADE",
    foreignKey:"custid",
    //targetKey:"custid" 같으면 안써도 상관없음
})

module.exports = db;