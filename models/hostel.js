const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const hostelSchema=new Schema({
    // Need the rooms that are empty and filled and their count too
    floors: Number,
    blocks: Number,
    hostelFor: String,enum: ['Boys','Girls','Coed'],
    features: {
        commonBathroom: Number,
        playground: Number,
        commonRoom: Number,
        dinningRoom: Number,
        drinkableWaterTap: Number,
        tv: Number,
    },
    address: {
        houseNumber: String,
        locality: String,
        dist: String,
        state: String,
        pin: String,
    },
});

module.exports=mongoose.model('Hotel', hostelSchema);