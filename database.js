const { Sequelize } = require("sequelize");

//CONNECTING TO DATABASE
//Way1
const sequelize = new Sequelize(
  "postgres://postgres:password@localhost:5432/project_oblivion"
);

/*
//Way2
const sequelize = new Sequelize("project_oblivion", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});
*/

//TESTING THE CONNECTION
async function connectToDb() {
  try {
    await sequelize.authenticate();
    console.log("Connecting Successfully");
    await sequelize.close(); //CLosing the connection
  } catch (error) {
    console.log("Connection failed");
  }
}

connectToDb();
