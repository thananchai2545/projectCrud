const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)
fs.readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize,Sequelize.DataTypes)
        db[model.name] = model
    })
db.sequelize = sequelize
db.Sequelize = Sequelize
db.user = require("./User")(sequelize, Sequelize);
db.hotel = require("./hotel")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);

db.role.belongsToMany(db.hotel, {
    through: "hotel_roles"
});
db.hotel.belongsToMany(db.role, {
    through: "hotel_roles"
});

db.role.belongsToMany(db.user, {
    through: "user_roles"
});
db.user.belongsToMany(db.role, {
    through: "user_roles"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db