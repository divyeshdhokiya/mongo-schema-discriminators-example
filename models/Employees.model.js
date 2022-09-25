const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  kind: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const EmployeeModel = mongoose.model("Employees", EmployeeSchema);

module.exports = EmployeeModel;
