const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userModel = require('../../model/users');

router.get('/', async (req,res) => {
    try{
        const users = await userModel.find()
        res.status(200).json({
            user: users
        });
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;