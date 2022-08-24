const express = require("express");
const application = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./src/Routes/routes')

//Middlewares
application.use(cors());
application.use(morgan('dev'));
application.use(express.json());

//Routes
application.use(router);
application.use(express.Router())

//Start server
application.listen(3050, (req, res) => {
    console.log('server is running on port 3050!')
})