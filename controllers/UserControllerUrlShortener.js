 
const Link = require('../models/linkModels')
const randomString = require("randomstring")





 

module.exports.orgUrl = async (req,res) => {


    const originalUrl = req.body.linkurl
    const code = randomString.generate(8)
    // map.set(code, originalUrl)

    const link = await Link.create({ originalURL: originalUrl, 
        shortenedURL: `https://url-shortener-pxui.onrender.com/${code}`,
        visited: 0, 
        code: code
    })
    console.log("Data:", link);

    // return res.render("url_shortener",console.log("url shortened"))
    return res.redirect("/link_sortner")


} 

// module.exports.orgUrl = async(req,res) =>{
     

//     const ID = req.params.id
//     console.log(ID)
//     const link = await Link.findOne({ code: ID })
//     link.visited++
//     link.save()

//     return res.redirect(link.originalURL)
// }





    
//     // console.log(req.body.linkurl , "give me some sunshine")
//     return res.render("url_shortener")
// }
    
            





 