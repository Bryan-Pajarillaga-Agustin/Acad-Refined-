import React, { createContext, useContext, useEffect, useState } from 'react'
import { tasksContext } from '../Tasks'
import MapTasks from './MapTasks/MapTasks'
import s from './TasksContainer.module.css'

export const tasksContainerContext = createContext()

const TasksContainer = () => {
    const {
        searching, setSearching,
        tasks, setTasks,
        filteredTask, setFilteredTask,
        sorting, setSorting,
        type, selecting, setSelecting
    } = useContext(tasksContext)

    // Context

    
    const [taskCheckboxes, setTaskCheckboxes] = useState(tasks.length != 0 ? [...tasks] : [])


    const tasksContainerVariables = {
        searching, setSearching,
        tasks, setTasks,
        filteredTask, setFilteredTask,
        sorting, setSorting,
        type, selecting, setSelecting,
        taskCheckboxes, setTaskCheckboxes
    }

    
    function checkTask() {

    }



    // Effects

    useEffect(()=>{
        setTaskCheckboxes([...tasks])
    },[tasks])

    return (
        <tasksContainerContext.Provider value={tasksContainerVariables}>
            <MapTasks>

            </MapTasks>
        </tasksContainerContext.Provider>
    )
}

// COMPONENT 2 - Task Element


export default TasksContainer