const router = require ('express').Router();
const User = require('../model/User');
const joi = require('joi');
//const registerValidation = require ('../validation');



//Async will wait for request

router.post('/register', async (req,res) =>{


       const schema = joi.object  ({
        name: joi.string().min(4).required(),
        email: joi.string().min(8).required().email(),
        password: joi.string().min(8).required()
        });

    const validation = schema.validate(req.body);
    res.send(validation.error.details[0].message);

    const user = new User({ 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password });

    try{
        const savedUser = await user.save();
        res.status(201).json(savedUser);
        
    }catch(err){
        res.status(400).json({message: err.message});
    }

});




module.exports = router;
 