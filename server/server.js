const bodyParser = require('body-parser')
const cors = require("cors");
const express = require('express');
const { sequelize } = require('./src/models/')

const app = express()
app.use(express.json());
const config = require('./src/config/config.js')


const db = require("./src/models");
const Role = db.role;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./src/routes/routes')(app)
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);

const PORT = process.env.PORT || config.port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {
        console.log('Server running on ' + PORT)
    })
})

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}