const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("MongodbAtlas connected successfully with taskServer");
    
}).catch(err=>{
    console.log(("MongodbAtlas connection fail"));
    console.log((err));
    
    
})