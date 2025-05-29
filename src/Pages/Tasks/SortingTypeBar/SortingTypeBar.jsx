import React from 'react'
import { tasksContext } from '../Tasks'
import { useContext } from 'react'
import s from './SortingTypeBar.module.css'

const SortingTypeBar = () => {
  const {sortingTypeBar, setSortingTypeBar, sortingTypes, setSortingTypes, unselectAll, setType} = useContext(tasksContext)
  

  return (
    <>
        <div className={sortingTypeBar ? s.sortTypeBar : s.hideSortTypeBar} onClick={()=>{setSortingTypeBar(false)}}>
            <ul className={s.sortTypeBarBox}>
                {sortingTypes?.map((type, i)=>{
                    return (
                        <li 
                            className={type.ind ? s.indicated : s.notIndicated} 
                            key={type.type} 
                            onClick={()=>{
                              unselectAll()
                              setType(type.type)
                              setSortingTypes(prev => prev.map(ea => 
                                prev[i].type == ea.type ?
                                {...ea, ind: true} :
                                {...ea, ind: false}
                              ))
                            }} >
                            {type.type}
                        </li>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default SortingTypeBar
