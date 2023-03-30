const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const staffSchema=new Schema({
    role: {type: String, require: true},
    name: { type: String,require: true },
    phone: { type: String,require: true,unique: true },
    altPhone: { type: String },
    email: { type: String,unique: true,require: true },
    dateOfbirth: { type: Date,require: true },
    gender: { type: String,require: true,enum: ['male','female','others'] },
    bloodGroup: { type: String,enum: ['A+','A-','B+','B-','AB+','AB-','O+','O-'] },
    familyPhoneNumber: [{ type: String }],
    address: {
        houseNumber: String,
        locality: String,
        dist: String,
        state: String,
        pin: String,
    },
    joinDate: { type: Date },
})