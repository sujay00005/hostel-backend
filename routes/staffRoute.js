const express=require('express');

const staffController=require('../controllers/staffController');
const {paginatedResult}=require('../util/pagination');
const staff=require('../models/staff');

const router=express.Router();

router.get('/get-staffs', paginatedResult(staff),staffController.getStaffs);

router.get('/staff/:staffId', staffController.getStaff);

router.post('/add-staff', staffController.postAddStaff);

router.post('/update-staff/:staffId', staffController.updateStaff);

router.post('/delete-staff/:staffId', staffController.deleteStaff);

module.exports=router;