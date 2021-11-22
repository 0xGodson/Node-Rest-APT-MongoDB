const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = require('../../model/users');
const userModel = require('../../model/users');

router.get('/', (req,res) => {
    res.status(200).json({
        message: "You can Update Your password By sending POST Request to this Endpoint",
        fields: "name, password" 
    });
})

router.post('/',async (req,res) => {
    const namePassword = {
        name: req.body.name,
        password: req.body.password
    }
    try{
        const updatePasswordByName = await userModel.updateOne({name:req.body.name}, {$set:{password:req.body.password}}, (error, data) => {
            if (error){
                console.log(error)
            }else{
                console.log(data)
            }
        res.status(200).json({
            password: "Updated"
        })
            
        })
    } catch (err){
        console.log(err)
    }
    });


module.exports = router
