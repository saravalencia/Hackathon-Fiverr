const Freelancer = require('../models/Freelancer');
const mongoose = require('mongoose');

exports.getFreelancers = async (req, res=response) => {

    try {
        const freelancer = await Freelancer.find({});
        res.json({ freelancer });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }  
}




exports.createANewFreelancer = async (req, res) => {

     try {
       
         // create el nuevo usuario
         freelancer = new Freelancer(req.body);
         
 
         // save user
         await freelancer.save();
 
 
     }catch(error) {
         console.log(error);
         res.status(400).send('Hubo un error');
     }
 }