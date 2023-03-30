const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const roomSchema=new Schema({
    roomNumber: {type: String, require: true},
    floorNumber: {type: String, require: true},
    hostelBlock: {type: String},
    rent: Number,
    features: {
        balcony: Boolean,
        kitchen: Boolean,
        attachBathroom: Boolean,
        indianBathroom: Boolean,
        westernBathroom: Boolean,
    },
    assets: {
        light: Number,
        fan: Number,
        cooler: Number,
        ac: Number,
        roomheater: Number,
        table: Number,
        chair: Number,
        bed: Number,
        shower: Number,
        other: [{
            object: String,
            quantity: Number,
        }]
    },
});

module.exports=mongoose.model('Room', roomSchema);