const express = require('express')
const router = express.Router()
const urlShortRoute = require('./UrlShortenerRouter')

const homeController = require("../controllers/HomeController");
 

router.get("/",homeController.home)

router.post('/create-session', homeController.createSession )

router.get("/link_sortner",homeController.urlshortener)

router.get('/:id', (req,res,next)=>{
    console.log("Midd redire");
    next()
},homeController.handleRedirect)

router.get("/logout", homeController.logout)

router.use('/',urlShortRoute)

console.log("routes is loaded")



module.exports= router;