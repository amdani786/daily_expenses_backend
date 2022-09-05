const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, (err) => {
    if(!err){
        console.log("mongoose connection established.");
        
    }
    else{
        console.log(JSON.stringify(err));
    }
})