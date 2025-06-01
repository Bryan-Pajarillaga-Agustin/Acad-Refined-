import s from "./BottomOptions.module.css"
import Button from "../../../Components/Button";
import { useContext } from "react";
import { tasksContext } from "../Tasks"

const BottomOptions = () => {

  const { handleSelectedTasks, selectedTask,
          selectTask, setSelectTask,
          unselectAll, tasks, searching,
          setUpdateTasks, filteredTasks,
          setFilteredTasks, handleMarking,
          selecting, setSelecting } = useContext(tasksContext)


  const selectAll = () => {
    let data = tasks
    let filtTasks = filteredTasks
    let checkedData = []
    let checkedFiltTasks = []

    if (searching) {
      filtTasks = filtTasks.map(task => {
        return { ...task, isChecked: true }
      })

      for (let i = 0; i < filtTasks.length; i++) {
        if (filtTasks[i].isChecked) checkedFiltTasks.push({ id: filtTasks[i].id, index: i })
      }

      handleSelectedTasks([...checkedFiltTasks])
    } else {
      data = data.map(task => {
        return { ...task, isChecked: true };;
      });

      for (let i = 0; i < data.length; i++) {
        if (data[i].isChecked) checkedData.push({ id: data[i].id, index: i })
      }
      handleSelectedTasks([...checkedData])
    }

    if (!searching) {
      setUpdateTasks(prevCheckboxes => {
        return prevCheckboxes.map(task => {
          return { ...task, isChecked: true };;
        });
      });
    } else {
      setFilteredTasks([...filtTasks])
    }
  };

  function del() {
    let data = tasks
    let filtTask = filteredTasks

    for (let i in filtTask) { //deleting selected filtered task
      for (let j in selectedTask) {
        if (filtTask[i].id === selectedTask[j].id) {
          filtTask.splice(i, 1)
        }
      }
    }

    for (let i in tasks) { //deleting selected task from the original array
      for (let j in selectedTask) {
        if (data[i].id === selectedTask[j].id) {
          data.splice(i, 1)
        }
      }
    }

    handleMarking(filtTask, [...data])
    handleSelectedTasks(null) //eliminates the id of tasks in the array called "selectedTasks"
  }

  const Options = () => {
    if (selecting == true) {
      return (
        <>
          <div className={s.left}>
            <Button 
              element={(<span className={s.fullContent}>Select All</span>)}
              icon={(<i className="fa fa-check"></i>)}
              className={s.SelectAllButton}
              func={() => { selectAll() }} />
            <Button 
              element={(<span className={s.fullContent}>Unselect</span>)}
              icon={(<i className={`fas fa fa-check ${s.uncheck}`}></i>)}
              className={s.UnselectAllButton}
              func={() => { unselectAll() }} />
          </div>
          <div className={s.right}>
            <Button icon={(<i className={`fa fa-trash`}></i>)}
              element={(<span className={s.fullContent}>Delete</span>)}
              func={() => { selectTask ? del() : console.log("No update") }} />
            <Button icon={(
              <i className={`fa fa-close`}></i>)}
              element={(<span className={s.fullContent}>Cancel</span>)}
              func={() => { setSelecting(false), unselectAll() }} />
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className={s.bottomOptionsWrapper}>
        {
          selecting ?
          <Options /> :
          <Button 
            element={(<span className={s.fullContent}>Select</span>)}
            icon={(<i className="fa fa-hand-o-up"></i>)}
            className={s.SelectButton}
            func={() => setSelecting(true)} />
        }

      </div>
    </>
  )
}

export default BottomOptions