import React from 'react'
import s from "../TasksContainer.module.css"
import { useContext } from 'react'
import { tasksContainerContext } from '../TasksContainer'
const Task = ({ task, i }) => {
    const { selecting } = useContext(tasksContainerContext)


    return  <label
                htmlFor={"task" + task.id}
                style={task.style != "default" ? { ...task.style } : null}
                className={task.type == "pending" ?
                    `${s.Pending} ${task.cName.map((ea) => {
                        return JSON.parse(ea)
                    }).join(' ')} ${s.tasks}` :
                    `${s.Finished} ${task.cName.map((ea) => {
                        return JSON.parse(ea)
                    }).join(' ')} ${s.tasks}`}
                key={task.id}
                onDoubleClick={() => { setEditing(true), setOpenedTask({ id: task.id, isOpened: true }) }}>
                <i style={selecting == false ? { display: "none" } : { display: "block" }} className={`fa fa-check-square ${task.isChecked === true ? s.checked : s.unchecked}`}></i>
                <input
                    style={{ display: "none" }}
                    type="checkbox"
                    id={"task" + task.id}
                    onChange={() => { selecting ? checkTask(task.id) : false }}
                />
                <span>{task.task}</span>
            </label>
}

export default Task