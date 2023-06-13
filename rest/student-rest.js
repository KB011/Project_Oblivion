const { DataTypes } = require("sequelize");
const db = require(__dirname + "/../database");
const studentCrud = require(__dirname + "/../crud/student-crud.js");
const student = new studentCrud(db, DataTypes);

async function addStudent(req, res) {
  const result = await student.createStudent(req.body);
  res.status(201).json({
    message: "Student created successfully",
    result,
  });
}

module.exports = { addStudent };
