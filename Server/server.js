const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/RentalDB", {
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})

const backendSchema = {
    propertyTpe : String,
    place : String,
    area : String,
    bedrooms : Number,
    bathrooms : Number,
    hospitals : String,
    colleges : String
};

const Backend = mongoose.model("Backend", backendSchema);

app.get("/getPosts",(req,res)=>{
    Backend.find({})
    .then((backendData) => {
        console.log("Get successful")
        console.log(backendData)
        res.json(backendData);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post("/insert",(req,res)=>{
    const newData = new Backend({
        propertyTpe : req.body.propertyTpe,
        place :req.body.place,
        area : req.body.area,
        bedrooms : req.body.bedrooms,
        bathrooms : req.body.bathrooms,
        hospitals : req.body.hospitals,
        colleges : req.body.colleges
    });

    newData.save()
        .then(() => {
            console.log("Data Submitted")
        })
        .catch((err) => {
            console.log(err);
        })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});