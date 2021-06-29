const express = require('express');
const app = express();
const freelancerRouter = require('./routes/freelancerRouter');
const path = require('path')
const {dbConnection} = require('./conf');
const cors= require("cors");

// global middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(cors())




//connection to DB
dbConnection();

//routes
app.use('/api/freelancers', freelancerRouter); // Handles GET requests to /api, sends back "API is running"



//Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
	});
}

module.exports = app;