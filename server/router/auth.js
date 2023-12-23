const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require("../model/userSchema");

router.use(cookieParser());




// signup route

router.post('/signup', async(req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;
        
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "plz fill the fields properly"});
    }

    try {

        if (await User.findOne({email})) {
            return res.status(422).json({error: "email already exist"});
        } else if (password !== cpassword) {
            return res.status(422).json({error: "passwords are not matching"});
        } else {
            
            const user = new User({name, email, phone, work, password, cpassword});

            // middleware for password hashing
            // defined in useSchema

            await user.save();

            res.status(201).json({message: "Successfully registered..."});

        } 

    } catch (error) {
        console.log(error);
    }
    

})


// signin route

router.post("/signin", async(req, res) => {

    const { email, password } = req.body;

    if ( !email || !password ) {
        return res.status(400).json({error: "Please fill details"});
    } 

    try {

        const user = await User.findOne({email});

        if ( !user ) {
            return res.status(400).json({error: "Please register first"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const token = await user.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            return res.status(200).json({message: "Login successful..."});

        } else {
            return res.status(400).json({error: "Invalid email or password"});
        }
        
        
    } catch (error) {
        console.log(error);
    }

});


router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post('/contact', authenticate, async (req, res) => {
    try {
        
        const {name, email, phone, message} = req.body;

        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({error: "Please fill the form"});
        }

        const userContact = await User.findOne({_id: req.rootID});
        // console.log(userContact);

        if(userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userMessage.save();
            res.status(201).json({message: 'user contact successfully'});
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
