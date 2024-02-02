import { useState } from "react"
import BaseInput from "../BaseInput/BaseInput"
import { Button } from "@mui/material"

const allTask: string[]= []

 function TodoList(){ 
 const [task, setTask] = useState('')



 function addTask ( ){
    if(task !== ''){
        allTask.push(task)
        setTask('')
    }
 }

 console.log(allTask)




    return( 
        <div>
            <h1>Todo List</h1>
            <BaseInput  value={task} onChange={(e)=>setTask(e.target.value)} label={"Add task "}/>
            <Button onClick={addTask}>Add Task</Button>
            
        </div>
    )
 }

 export default TodoList