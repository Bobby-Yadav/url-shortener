const express = require('express')
const router = express.Router()

const userController = require('../controllers/UserControllerUrlShortener')



router.post('/orgUrlreq', (req,res,next)=>{
    console.log("From Short Route");
    next();
},userController.orgUrl)



module.exports = router