import React, { useContext, useState } from 'react'
import { tasksContext } from '../Tasks'
import s from './TasksContainer.module.css'

const TasksContainer = () => {
  const {
    searching, setSearching,
    tasks, setTasks,
    filteredTask, setFilteredTask,
    sorting, setSorting
  } = useContext(tasksContext)

  const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.length != 0 ? [...tasks] : null)

  function checkTask() {

  }

  const EachList = () => {
    if(searching && filteredTask != null) {
        return <div className={s.Task_Container} key={"Task_Container"}>
            
            {filteredTask.map((task, i) => {
                if(task.type === "pending" && type === "Pending") {
                    return <TaskElement task={task} i={i} key={task.id}/>
                } else if(task.type === "finished" && type === "Finished") {
                      return <TaskElement task={task} i={i} key={task.id}/>
                } else if(type === "All Tasks") {
                    return <TaskElement task={task} i={i} key={task.id}/>
                } 
            })}
        </div>
    } else if (sorting && !searching) {
        let sortedTasks = taskCheckboxes
        for(let i in sortOptions) {
            if(i == 0 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b)=>{ return b.dateCreated.time - a.dateCreated.time })
            } else if(i == 1 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b)=>{ return a.dateCreated.time - b.dateCreated.time })
            } else if(i == 2 && sortOptions[i].state == true){
                sortedTasks = sortedTasks.sort((a, b)=>{ return a.task.localeCompare(b.task)})
            } else if(i == 3 && sortOptions[i].state == true) {
                sortedTasks = sortedTasks.sort((a, b)=>{ return b.task.localeCompare(a.task)})
            } 
        }

        return (
            <div className={s.Task_Container}>
                {sortedTasks.map((task, i)=>{
                    if(task.type === "pending" && type === "Pending") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    } else if (task.type === "finished" && type === "Finished") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    } else if (type === "All Tasks") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    }
                })}
            </div>
        )
    } else if(!sorting && !searching) {
        return (
            <div className={s.Task_Container}>
                {taskCheckboxes.map((task, i) => {
                    if(task.type === "pending" && type === "Pending") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    } else if (task.type === "finished" && type === "Finished") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    } else if (type === "All Tasks") {
                        return <TaskElement task={task} i={i} key={task.id}/>
                    }
                })}
            </div>
        )
    } 
} 

// COMPONENT 2 - Task Element

const TaskElement = ({task, i}) => {
    return <label htmlFor={"task" + task.id} style={task.style != "default" ? {...task.style} : null} className={task.type == "pending" ? `${s.Pending} ${task.cName.map((ea)=>{return JSON.parse(ea)}).join(' ')} ${s.tasks}` : `${s.Finished} ${task.cName.map((ea)=>{return JSON.parse(ea)}).join(' ')} ${s.tasks}`}  key={task.id} onDoubleClick={()=>{setEditing(true), setOpenedTask({id: task.id, isOpened: true})}}>
                <i style={selectTask == false ? {display: "none"} : {display: "block"}} className={`fa fa-check-square ${task.isChecked === true ? s.checked : s.unchecked}`}></i>
                <input
                    style={{display: "none"}}
                    type="checkbox"
                    id={"task" + task.id}
                    onChange={() => {selectTask ? checkTask(task.id) : false}}
                />
                {task.task}
            </label>
}


// let dataTask = data

if(taskCheckboxes != null) {
    return (
        <>
            <EachList />
        </>
    )
}

}

export default TasksContainer