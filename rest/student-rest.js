const { DataTypes } = require("sequelize");
const db = require(__dirname + "/../database");
const studentCrud = require(__dirname + "/../crud/student-crud.js");
const student = new studentCrud(db, DataTypes);

async function addStudent(req, res) {
  const result = await student.createStudent(req.body);
  if (result instanceof Error) {
    console.log(`Error while creating student: ${result.message}`);
    return res.status(400).json({
      message: result.message,
    });
  }

  console.log(result.toJSON());
  res.status(201).json({
    message: "Student created successfully",
    result,
  });
}

module.exports = { addStudent };
