const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = require('../../model/users');
const userModel = require('../../model/users');

router.get('/',(req,res) => {
    res.status(200).json({
        message: "Start Creating User By Send Post Request",
        fields: "name, age, password"
    });
})
router.post('/', async (req,res) => {
    const userDetails = {
        name: req.body.name,
        age: req.body.age,
        password: req.body.password
    }
    try{
        const saveUserDetails = await userModel.create(userDetails)
        res.status(201).json(
            userDetails    
        );
    } catch(err){
        res.status(400).json({
            message: err.message
        });
    }
})

module.exports = router
