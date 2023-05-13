const express=require('express');

const studentController=require('../controllers/studentController');
const {paginatedResult}=require('../util/pagination');
const student=require('../models/student');

const router=express.Router();

router.get('/get-students',paginatedResult(student), studentController.getStudents);

router.get('/student/:studentId', studentController.getStudent);

router.post('/add-student', studentController.postAddStudent);

router.post('/update-student', studentController.updateStudent);

router.post('/delete-student/:studentId', studentController.deleteStudent)

module.exports=router;