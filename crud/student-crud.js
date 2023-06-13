const studentModel = require(__dirname + "/../models/student.js");

class studentCrud {
  constructor(connection, dataTypes) {
    this.connection = connection;
    this.dataTypes = dataTypes;
    this.student = studentModel(connection, dataTypes);
  }

  async createStudent(requestBody) {
    try {
      return await this.connection.transaction(async (t) => {
        return await this.student.create(requestBody, { transaction: t });
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = studentCrud;
