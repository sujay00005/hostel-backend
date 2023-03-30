const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const studentSchema=new Schema({
    name: {type: String, require: true},
    phone: {type: String, require: true},
    altPhone: {type: String},
    email: {type: String, require: true},
    //dateOfbirth: {type: Date, require: true},
    gender: {type: String, require: true, enum: ['male', 'female', 'other']},
    blood: {type: String, require: true, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']},
    mother: {type: String},
    father: {type: String},
    guardian: {type: String},
    //parentsContactNumbers: [{type: String}],
});

module.exports = mongoose.model('Student',studentSchema);