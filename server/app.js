const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt=require('bcrypt');
const express = require("express");
const app=express();
const signupRoutes=require('./routes/signupRoutes');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/',signupRoutes);

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})



