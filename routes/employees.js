var express = require("express");

var router = express.Router();

const EmployeeModel = require("../models/Employees.model");
const PermanentEmployeeModel = require("../models/PermanentEmployee.model");
const TemporaryEmployeeModel = require("../models/TemporaryEmployee.model");

router.get("/", async function (req, res, next) {
  // Let's save data to normal Employee modal
  const employee = new EmployeeModel({
    name: "ABC",
    kind: "temporary/permanent",
  });
  await employee.save();

  // Now, let's save data to PermanentEmployee modal based on kind of request
  const permanentEmployeeModel = new PermanentEmployeeModel({
    name: "XYZ",
    kind: "permanent",
    perks: ["yearly bonus", "udemy access"],
  });
  await permanentEmployeeModel.save();

  // And, save data to TemporaryEmployee modal based on kind of request
  const temporaryEmployeeSchema = new TemporaryEmployeeModel({
    name: "MNO",
    kind: "temporary",
    contract_tenure: 3,
  });
  await temporaryEmployeeSchema.save();

  // Output:
  // 3 records got added in to the Employee collection
  // employees collection data:
  // {
  //   "_id": {
  //     "$oid": "632ffdde261b55ab42883d09"
  //   },
  //   "kind": "temporary/permanent",
  //   "name": "ABC",
  //   "__v": 0
  // },
  // {
  //   "_id": {
  //     "$oid": "632ffdde261b55ab42883d0b"
  //   },
  //   "perks": [
  //     "yearly bonus",
  //     "udemy access"
  //   ],
  //   "kind": "permanent",
  //   "name": "XYZ",
  //   "__t": "PermanentEmployee",
  //   "__v": 0
  // },
  // {
  //   "_id": {
  //     "$oid": "632ffdde261b55ab42883d0d"
  //   },
  //   "contract_tenure": 3,
  //   "kind": "temporary",
  //   "name": "MNO",
  //   "__t": "TemporaryEmployee",
  //   "__v": 0
  // }
});

module.exports = router;
