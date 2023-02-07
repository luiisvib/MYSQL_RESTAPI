const express = require("express");
const router = express.Router();
const employeesRoutes = require("./employees");
const { ping, index } = require("../controllers/index.controller");

/* GET home page. */
router.get("/", index);

router.get("/ping", ping);



router.use(employeesRoutes);

module.exports = router;
