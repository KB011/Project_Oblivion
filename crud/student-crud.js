const studentModel = require(__dirname + "/../models/student.js");

class studentCrud {
  constructor(connection, dataTypes) {
    this.connection = connection;
    this.dataTypes = dataTypes;
    this.student = studentModel(connection, dataTypes);
  }

  async createStudent(requestBody) {
    return await this.student.create(requestBody);
  }
}

module.exports = studentCrud;
