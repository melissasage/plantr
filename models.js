const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");
module.exports = db;

const Gardener = db.define("gardener", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define("plot", {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define("vegetable", {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });
// Plot.belongsTo(Gardener, { as: "" });
Gardener.hasOne(Plot, { through: "gardener_plot" });
Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" });
