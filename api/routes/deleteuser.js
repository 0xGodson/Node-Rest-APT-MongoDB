const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = require('../../model/users');
const userModel = require('../../model/users');

router.get('/',(req,res) => {
    res.status(200).json({
        message: "You can Delete a User By Sending Delete to this Endpoint",
        feilds: "name, password"
    })
})

router.delete('/', async (req,res) => {
    const namePassword = {
        name: req.body.name,
    }
    console.log(namePassword)
    try{
        const deleteUser = await userModel.deleteOne({name: req.body.name})
        res.status(200).json({
            deleted_user: req.body.name
        })

    }catch (err){
        res.status(401).json({
            error: "Invalid Name"
        })
    }
})

module.exports = router