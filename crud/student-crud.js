const { db, sequelize } = require(__dirname + "/../models/index.js");
const fileName = __filename.split("\\").at(-1);
const modelName = require(__dirname + "/../models/modelNames.json")[fileName];
const Student = db[modelName];

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
