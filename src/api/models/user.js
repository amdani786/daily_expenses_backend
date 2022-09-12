const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["ADMIN","USER"]
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

//generating tokens
userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({id:this._id.toString()},"dailyexpensesbackendjsonwebtoken");
        console.log(token);
        this.tokens = this.tokens.concat({token});
        // this.save();
        return token;
    }
    catch{
        res.send("the error part" + error);
        console.log("the error part" + error);
    }
}

//converting pass into hash
userSchema.pre("save", async function(next) {
   
    // if password is changing then only hash it
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

// now create collection 
const User = new mongoose.model("Users",userSchema);

module.exports = User;