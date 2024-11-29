const { Task } = require('../models');

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    try{
        const task = await Task.create({title, description, userId: req.userId});
        res.status(201).json(task);
    }catch(error){
        res.status(500).json({error: `Error on create task: ${error}`});
    }
}

exports.getTasks = async (req, res) => {
    try{
        const tasks = await Task.findAll({where: { userId: req.userId }});
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({error: `Error on search tasks: ${error}`});
    }
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try{
        const task = await Task.findOne({where: {id, userId: req.userId}});
        if(!task) return res.status(404).json({error: "Task not found!"});

        task.title = title ?? task.title;
        task.description = description ?? task.description;
        task.status = status ?? task.status;
        await task.save();

        res.status(200).json(task);
    }catch(error){
        res.status(500).json({error: `Error on update task: ${error}`});
    }
}

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try{
        const task = await Task.findOne({where: { id, userId: req.userId }});
        if(!task) return res.status(404).json({error: "Task not found!"});

        await task.destroy();
        res.status(204).send();
    }catch(error){
        res.status(500).json({error: `Error on delete task: ${error}`});
    }
}