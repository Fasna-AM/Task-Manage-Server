const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const tasks = mongoose.model("tasks",taskSchema)

module.exports = tasks