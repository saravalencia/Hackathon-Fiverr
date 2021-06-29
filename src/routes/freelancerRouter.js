const express = require('express');
const router = express.Router();
const freelancerController = require('../controllers/freelancerController');

// get list of freelancers
router.get('/',
	freelancerController.getFreelancers
);
router.post('/', 
    
	freelancerController.createANewFreelancer
);

module.exports = router;
