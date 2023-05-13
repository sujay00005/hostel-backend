const Staff=require("../models/staff")

exports.getStaff=(req, res, next) => {
    Staff.findById(req.params.staffId)
        .then((result) => {
            console.log(result);
            return result;
        })
        .then((result) => {
            return res.json({
                data: result
            }).status(200)
        })
        .catch((err) => console.log(err));
}

exports.getStaffs=(req, res, next) => {
    //Staff.find()
    //    .then((staffs) => {
    //        console.log(staffs);
    //        return staffs;
    //    })
    //    .then((staffs) => {
    //        return res.json({
    //            data: staffs
    //        }).status(200);
    //    })
    //    .catch((err) => console.log(err));

    return res.json({
        data: res.paginatedResult
    }).status(200);
}

exports.postAddStaff=(req, res, next) => {
    console.log("TRYING TO ADD NEW STAFF");
    const staff=new Staff({
        role: req.body.role,
        name: req.body.name,
        phone: req.body.phone,
        altPhone: req.body.altPhone,
        email: req.body.email,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        familyPhoneNumber: req.body.familyPhoneNumber,
        //address: req.body.address
    });


    staff
        .save()
        .then(result => {
            console.log("STAFF SAVED");
            console.log(result);
        })
        .then((result) => {
            res.json({
                data:result
            })
        })
    .catch(err=>console.log(err))
}

exports.updateStaff=(req, res, next) => {
    //Staff.findByIdAndUpdate(req.params.staffId,{
    //        role:req.body.role,
    //        name:req.body.name,
    //        phone:req.body.phone,
    //        altPhone:req.body.altPhone,
    //        email:req.body.email,
    //        gender:req.body.gender,
    //        bloodGroup:req.body.bloodGroup,
    //        familyPhoneNumber:req.body.familyPhoneNumber,
    //        //address:req.body.address,
    //}, {new: true}, (err, currentDocument)=>{
    //    //if {new: false}, the currentDocunment is before updatin g the document
    //    console.log("CAme in find by id and update");
    //    console.log(currentDocument);
    //    if(err) {
    //        console.log(err);
    //    } else {
    //        res.json({
    //            data: currentDocument,
    //        })
    //    }
    //});
    
    Staff.findById(req.params.staffId)
        .then(staff => {
            staff.role=req.body.role;
            staff.name=req.body.name;
            staff.phone=req.body.phone;
            staff.altPhone=req.body.altPhone;
            staff.email=req.body.email;
            staff.gender=req.body.gender;
            staff.bloodGroup=req.body.bloodGroup,
            staff.familyPhoneNumber=req.body.familyPhoneNumber;
            staff.address=req.body.address;

            return staff.save();
        })
        .then(result => {
            console.log(result);
            console.log("STAFF UPDATED");
        })
        .catch(err => console.log(err));
}

exports.deleteStaff=(req, res, next) => {
    Staff.findByIdAndRemove(req.params.staffId)
        .then((result) => {
            console.log(result);
            console.log("STAFF DELETED");
        })
        .catch(err => console.log(err));
}
