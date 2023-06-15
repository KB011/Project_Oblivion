const { db, sequelize } = require(__dirname + "/../models/index.js");
const Student = db["Student"];

async function createStudent(requestBody) {
  try {
    return await sequelize.transaction(async (t) => {
      return await Student.create(requestBody, { transaction: t });
    });
  } catch (error) {
    return error;
  }
}

module.exports = { createStudent };
