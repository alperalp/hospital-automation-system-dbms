const express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/departmentController')

router.get('/', DepartmentController.getAllDepartments);


module.exports = router;
