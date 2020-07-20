const Sequelize = require("sequelize");

function db() {
  return new Sequelize("postgres://postgres:postgres@localhost:5432/wescrud", {
    logging: console.log, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
}
module.exports = db;
