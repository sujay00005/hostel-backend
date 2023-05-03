const Student=require('../models/student');

exports.getStudent=(req, res, next) => {
    //since using mongoose so can directly use the studentId otherwise needed to convert to ObjectId
    Student.findById(req.params.studentId)
        .then(result => {
            console.log(result);
            return result;
        })
        .then(result => {
            return res.json({
                data: result
            }).status(200)

        })
        .catch(err => console.log(err));
}

exports.getStudents=(req, res, next) => {
    Student.find()
        .then(students => {
            console.log(students);
            return students;
        })
        .then(students => {
            return res.json({
                data: students
            }).status(200);
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postAddStudent=(req, res, next) => {
    console.log("****************",req.body);
    const student=new Student({
        name: req.body.name,
        phone: req.body.phone,
        altPhone: req.body.altPhone,
        email: req.body.email,
        //dateOfbirth: req.body.dateOfbirth,
        gender: req.body.gender,
        blood: req.body.bloodGroup,
        mother: req.body.mothersName,
        father: req.body.fathersName,
        guardian: req.body.localGuardian,
        parentsContactNumbers: req.body.parentsContactNumbers
    });

    console.log("INITIALIZED THE STUDENT#################################################################");
    console.log(student);

    student
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updateStudent=(req, res, next) => {
    console.log("REACHED HERE TO UPDATE");

    Student.findById(req.body._id)
        //should pe passed with the param not the body
        .then(student => {
            student.name=req.body.name;
            student.phone=req.body.phone;
            student.altPhone=req.body.altPhone;
            student.email=req.body.email;
            //student.dateOfbirth= req.body.dateOfbirth;
            student.gender=req.body.gender;
            student.blood=req.body.bloodGroup;
            student.mother=req.body.mothersName;
            student.father=req.body.fathersName;
            student.guardian=req.body.localGuardian;
            student.parentsContactNumbers=req.body.parentsContactNumbers;

            return student.save();
        })
        .then(result => {
            console.log('STUDENT UPDATED');
        })
        .catch(err => console.log(err));
};

exports.deleteStudent=(req, res, next) => {
    Student.findByIdAndRemove(req.params.studentId)
        .then(() => {
            console.log('Student DELETED')
        })
        .catch(err => console.log(err));
};