const User = require('../../models/user');
const bcrypt = require("bcrypt");


const registerObj = {
    register: async (req,res) => {
        try{
            if(req.body.password === req.body.confirmPassword){
                const user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phone: req.body.phone,
                    role: "USER",
                    password: req.body.password
                });

                const register = await user.save();
                res.status(201).send("Registration successful!")
                console.log(register);
            }
            else{
                res.send("Passwords are not matching.");
            }
        }
        catch (error){
            res.status(400).send(error);
        }
    },

    login: async (req,res) => {
        try{
            console.log(req.body)
           const email = req.body.email;
           const password = req.body.password;

           const userEmail = await User.findOne({email: email});

           console.log(userEmail);
           const isMatch = await bcrypt.compare(password,userEmail.password);

        
           if(isMatch){
            res.status(201).send("Login Successfully!");
           }
           else{
            res.send("Invalid password.");
           }
        }
        catch (error){
            res.status(400).send("Invalid login details.");
        }
    },

    getUsers: async (req,res) => {
        try{
            res.send("Server Redpolyed.");
        }
        catch{

        }
     
    }
}

module.exports = registerObj;