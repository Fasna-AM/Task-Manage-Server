const users = require('../model/userModel')
const jwt = require('jsonwebtoken')


// register
exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    console.log(req.body);
    
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Already Existing user Please Login")
        }else{
            const newUser = new users({username,email,password})
            await newUser.save()
            res.status(200).json(newUser)

        }

    }catch(err){
        res.status(401).json(err)
    }

}

// login
exports.loginController = async(req,res)=>{
    console.log("Inside loginController");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            //token generation
            const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
            res.status(200).json({
                user:existingUser,token
            })
        }else{
            res.status(404).json("Incorrect Email/Passwod!!!")
        }

    }catch(err){
        res.status(401).json(err)
    }
    
}