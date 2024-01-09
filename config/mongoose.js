 
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://bobbyyadav0906:UweK5fmY6fSq3oQp@cluster0.gzet5y1.mongodb.net/urlsortner')

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting Database"));
db.once('open',function(){
    console.log("Successfully Connected to Database!!");
});
module.exports=db;
