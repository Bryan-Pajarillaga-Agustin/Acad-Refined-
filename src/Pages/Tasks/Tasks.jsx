import React from 'react'
import { context } from '../../App'
import { useContext, useState, useEffect } from 'react'
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
import styles from "./TasksContainer/TasksContainer.module.css"

// Other Components
import Button from '../../Components/Button'
import { createContext } from 'react'

export const tasksContext = createContext()

import { db } from '../../Firebase/Firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { update } from 'firebase/database'
const Tasks = () => {
  // Context
  const {user, setHideNavBar, setHideSideBar, setPages} = useContext(context)

  // States
  // Booleans
  const [writeTaskPrompt, setWriteTaskPrompt] = useState(false)
  const [editTaskPrompt, setEditTaskPrompt] = useState(false)
  const [sortTaskPrompt, setSortTaskPrompt] = useState(false)
  const [sortingTypeBar, setSortingTypeBar] = useState(false)
  const [searching, setSearching] = useState(false)
  const [sorting, setSorting] = useState(false)
  const [selecting, setSelecting] = useState(false)
  const [editing, setEditing] = useState(false)

  const [type, setType] = useState("Pending")

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

  // ContextVariable

  const contextVariables = {
    // Booleans
    writeTaskPrompt, setWriteTaskPrompt,
    editTaskPrompt, setEditTaskPrompt,
    sortTaskPrompt, setSortTaskPrompt,
    sortingTypeBar, setSortingTypeBar,
    type, setType,
    searching, setSearching,
    sorting, setSorting,
    selecting, setSelecting,
    editing, setEditing,

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

  // *-------------------- FUNCTIONS  -----------------------* 

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

  // *-------------------- FUNCTIONS  -----------------------*

  
  // Effects

  useEffect(()=>{
      setPages(prev => prev.map((p)=>{
          if(p.name === "Tasks") return {...p, ind: true}

          return{...p}
      }))

      const getFromFirestore = async () => {
        try {
          const docRef = doc(db, "Users", "Mav3CkHiEkOgsggTfW0q0pioWFL2")
          const data = await getDoc(docRef)

          let tasksData = data.data().tasks
          
          
          setTasks([...tasksData])
        } catch (error) {
          console.log(error)
        }
      }

      getFromFirestore()
  },[])

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