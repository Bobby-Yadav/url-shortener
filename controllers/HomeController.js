const Link = require('../models/linkModels')

module.exports.home = (req,res) => {
    return res.render("user_sign_in")
}

module.exports.createSession = (req,res)=>{
    return res.redirect('/link_sortner')
}

module.exports.urlshortener =async(req,res) => {
    console.log("Msg from Conteroller");
    const links = await Link.find();

    return res.render("url_shortener", {links})
}

module.exports.logout = (req,res) => {
    return res.render("user_sign_in")
}


module.exports.handleRedirect = async(req,res) => {
    let id = req.params.id;
    console.log("id:", id);

    try {
        const link = await Link.findOne({code : id})
        if(link){
            return res.redirect(link.originalURL);
        }
    } catch (error) {
        console.log("Error!",error);
        return res.redirect('/link_sortner')
    }


    // return res.redirect()
}