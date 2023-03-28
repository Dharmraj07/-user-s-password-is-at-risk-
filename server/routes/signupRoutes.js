const express = require("express");
const { signup, allUsers, signin } = require("../controllers/signupController");
//const bcrypt=require('bcrypt');
const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/alluser',allUsers);
module.exports=router;