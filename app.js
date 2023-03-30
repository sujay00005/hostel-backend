const express = require('express');
const app=express();

const mongoose=require('mongoose');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
//app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

const cors=require('cors');
app.use(cors({origin:'*'}));

//app.set('view engine', 'ejs');
//app.set('views', 'views');

const studentRoute=require('./routes/studentRoute');
//const staffRoute=require('./routes/staffRoute');

app.use(studentRoute);
//app.use(staffRoute);

mongoose
    .connect(
        'mongodb://localhost:27017/hostel_hive'
    )
    .then(result => {
        console.log('✅✅✅ Connected to the database ✅✅✅');;
        return result;
    })
    .then(result => {
        app.listen(3000, () => {
            console.log(`
                ******************************************************
                  🔴🟡🟢  Server is running on port: 3000  🟢🟡🔴
                ******************************************************
            `);
        });
    })
    .catch(err => {
        console.log(err);
    });