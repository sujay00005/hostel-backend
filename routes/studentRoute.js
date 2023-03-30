const express=require('express');

const studentController=require('../controllers/studentController');

const router=express.Router();

router.post('/add-student', studentController.postAddStudent);

router.get('/get-students', studentController.getStudents);

router.get('/student/:studentId', studentController.getStudent);


module.exports=router;