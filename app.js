const express = require("express");
const app = express();

const { sequelize } = require(__dirname + "/models/index.js");
const { addStudent } = require(__dirname + "/rest/student-rest.js");

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "GET request to / route",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "POST request to / route",
    data: req.body,
  });
});

app.post("/students", addStudent);

app.listen(4000, async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connected to PostgreSQL Docker Instance successfully at port 5432"
    );
    console.log("Server running on port 4000");
  } catch (error) {
    throw new Error(error.message + " Connection to PostgreSQL failed!");
  }
});
