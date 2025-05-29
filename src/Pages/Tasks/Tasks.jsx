import React from 'react'
import { context } from '../../App'
import { useContext } from 'react'
import { useState } from 'react'

// Tasks File Components
import BottomOptions from './BottomOptions/BottomOptions'
import EditTaskPrompt from './EditTaskPrompt/EditTaskPrompt'
import SortingTypeBar from './SortingTypeBar/SortingTypeBar'
import SortTaskPrompt from './SortTaskPrompt/SortTaskPrompt'
import TasksContainer from './TasksContainer/TasksContainer'
import TopOptions from './TopOptions/TopOptions'
import WriteTaskPrompt from './WriteTaskPrompt/WriteTaskPrompt'
import SaveChanges from '../../Components/SaveChanges/SaveChanges'

// Style 
import s from "./Tasks.module.css"

// Other Components
import Button from '../../Components/Button'
import { createContext } from 'react'

export const tasksContext = createContext()

import { db } from '../../Firebase/Firebase'
import { doc, getDoc } from 'firebase/firestore'
const Tasks = () => {
  // Context
  const {user, setHideNavBar, setHideSideBar} = useContext(context)

  // States
  // Booleans
  const [writeTaskPrompt, setWriteTaskPrompt] = useState(false)
  const [editTaskPrompt, setEditTaskPrompt] = useState(false)
  const [sortTaskPrompt, setSortTaskPrompt] = useState(false)
  const [sortingTypeBar, setSortingTypeBar] = useState(false)
  const [searching, setSearching] = useState(false)
  const [sorting, setSorting] = useState(false)

  const [type, setType] = useState("")

  // Numbers 
  
  const [numberOfChanges, setNumberOfChanges] = useState(null)

  // Arrays and Objects
  const [tasks, setTasks] = useState([])
  const [updatedTasks, setUpdatedTasks] = useState(tasks.length != 0 ? [...tasks] : []) 
  const [filteredTask, setFilteredTask] = useState([])
  const [selectedTasks, setSelectedTasks] = useState([])
  const [changes, setChanges] = useState([])
  const [sortingTypes, setSortingTypes] = useState([
    {type: "Pending", ind: true},
    {type: "Finished", ind: false},
    {type: "All Tasks", ind: false},
  ])

  function writeTask() {

  }

  function selectAll() {

  }

  function unselectAll() {

  }

  function updateTask() {

  }

  const saveToDataBase = () => {

  }

  const contextVariables = {
    // Booleans
    writeTaskPrompt, setWriteTaskPrompt,
    editTaskPrompt, setEditTaskPrompt,
    sortTaskPrompt, setSortTaskPrompt,
    sortingTypeBar, setSortingTypeBar,
    type, setType,
    searching, setSearching,
    sorting, setSorting,

    // Numbers
    numberOfChanges, setNumberOfChanges,

    // Arrays & Objects
    tasks, setTasks,
    filteredTask, setFilteredTask,
    updatedTasks, setUpdatedTasks,
    selectedTasks, setSelectedTasks,
    changes, setChanges,
    sortingTypes, setSortingTypes,

    // Functions
    unselectAll
  }

  

  return <>
    <tasksContext.Provider value={contextVariables}>
      <div className={s.tasksWrapper}>
        <div className={s.tasksEditor}>
          <h2 className={s.titleWrapper}>
              Tasks 
              <i className={`fa fa-bars`} onClick={()=>{sortingTypeBar ? setSortingTypeBar(false) : setSortingTypeBar(true)}}></i>
              <SortingTypeBar />
          </h2>

          <TopOptions />
          <div className={s.searchWrapper}>
              <div>
                  <label htmlFor="searchBar">
                      <i className={"fa fa-search"}></i>
                  </label>
                  <input
                      id="search-bar"
                      type="text"
                      placeholder="Type Task..."/>
                  <Button content={"Search"} className={s.Search_button} func={()=>{handleSearch(), handleIsSorting()}}/>
              </div>
          </div>
          <BottomOptions />
          <TasksContainer />

          <EditTaskPrompt />
          <SortTaskPrompt />
        </div>
      </div>
    </tasksContext.Provider>
  </>
}

export default Tasks