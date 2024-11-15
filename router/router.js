const express = require('express')
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

//addtask
router.post('/addtask',jwtMiddleware,taskController.addTaskController)

//getAllTask
router.get('/getAllTask',jwtMiddleware,taskController.getAllTaskController)

//deleteTask
router.delete('/tasks/:id/deleteTask',jwtMiddleware,taskController.deleteTaskController)

//updateTask
router.put('/tasks/:id/updateTask',jwtMiddleware,taskController.updateTaskController)

module.exports = router