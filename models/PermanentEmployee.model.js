const mongoose = require("mongoose");

const EmployeeModel = require("./Employees.model");

const PermanentEmployeeSchema = mongoose.Schema({
  perks: {
    type: [String],
    required: true,
  },
});

const PermanentEmployeeModel = EmployeeModel.discriminator(
  "PermanentEmployee",
  PermanentEmployeeSchema
);

module.exports = PermanentEmployeeModel;
