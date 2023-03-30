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
        blood: req.body.blood,
        mother: req.body.mother,
        father: req.body.father,
        guardian: req.body.guardian,
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