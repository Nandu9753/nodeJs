const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const tasks = [];
app.use(bodyParser.json());

// add a new task
app.post('/task',(req,res)=>{
    tasks.push(req.body);
    res.send(req.body);
});

// fetch a all task 
app.get('/task',(req,res) =>{
    res.send(tasks);
})

app.put('/task/:taskId',(req,res) =>{
    const taskId = req.params.taskId;
    const updatedTask = req.body;
    const task = tasks.map(task => (task.id === taskId ? { ...task, ...updatedTask } : task));
    res.send(tasks);
}) 

// Delete Task
// Delete a task
app.delete('/task/:taskId', (req, res) => {
   const taskId = req.params.taskId;
    task = tasks.filter(task => task.id !== taskId);
    res.send(tasks);
  });

app.listen(port,()=>{
    console.log("Server run on:",port);
})