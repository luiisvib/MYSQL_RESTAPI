const express = require("express");
const router = express.Router();
const { getEmployees, createEmployee, updateEmployee, deleteEmployees, getEmployee } = require("../controllers/employees.controller");

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

router.put("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployees);

module.exports = router;
