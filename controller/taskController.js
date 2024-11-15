const tasks = require('../model/taskModel')


// add task
exports.addTaskController = async(req,res)=>{
    console.log("Inside addTaskController");
    const {title,description,startDate,endDate,status} = req.body
    const userId = req.userId
    try{
        const newTask = new tasks({
            title,description,startDate,endDate,status,userId
        })
        await newTask.save()
        res.status(200).json(newTask)
    }catch(err){
        res.status(401).json(err)
    }
    
}

//getalltasks
exports.getAllTaskController = async(req,res)=>{
    console.log("Inside getAllTaskController ");
    const userId = req.userId
    try{
        const alltask = await tasks.find({userId})
        res.status(200).json(alltask)

    }catch(err){
        res.status(401).json(err)
    }
    
}

//deletetask
exports.deleteTaskController =async(req,res)=>{
    console.log("Inside deleteTaskController");
    const {id} = req.params
    try{
        const deletedTask = await tasks.findByIdAndDelete({_id:id})
        res.status(200).json(deletedTask)

    }catch(err){
        res.status(401).json(err)
    }
    
}

//updateTask
exports.updateTaskController = async(req,res)=>{
    console.log("Inside updateTaskController");
    const {id} = req.params
    const userId= req.userId
    const {title,description,startDate,endDate,status} = req.body

    try{
        const updateTask = await tasks.findByIdAndUpdate({_id:id},{
            title,description,startDate,endDate,status,userId
        },{new:true})
        await updateTask.save()
        res.status(200).json(updateTask)
    }catch(err){
        res.status(401).json(err)
    }
    
}