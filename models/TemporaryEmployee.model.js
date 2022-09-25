const mongoose = require("mongoose");

const EmployeeModel = require("./Employees.model");

const TemporaryEmployeeSchema = mongoose.Schema({
  contract_tenure: {
    type: Number,
    required: true,
  },
});

const TemporaryEmployeeModel = EmployeeModel.discriminator(
  "TemporaryEmployee",
  TemporaryEmployeeSchema
);

module.exports = TemporaryEmployeeModel;
