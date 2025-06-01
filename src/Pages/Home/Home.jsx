import React, { useContext, useEffect } from 'react'
import s from './Home.module.css'
import a from './HomeAnimation.module.css'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'
import { context } from '../../App'
const Home = () => {
  const {pagination, setPages} = useContext(context) 
  
  useEffect(()=>{
        setPages(prev => prev.map((p)=>{
            if(p.name === "Home") return {...p, ind: true}

            return{...p}
        }))
    },[])

  return (
    <>
      <div className={s.homeWrapper}>
        <div className={`${s.left} ${a.animateLeft}`}>

          <div className={s.wrapTop}>
            <h1>
                Welcome User! 
            </h1>
            <p>Write, read and document your work and studies using the Acad Web App for free!</p>
            <Link to={"/Acad/Tasks"} className={s.Links}>
              <Button content={"Get Started"} func={()=>{pagination(1)}}></Button>
            </Link>
          </div>
          <div className={s.wrapBottom}>
            <Button className={s.orange}></Button>
            <Button className={s.purple}></Button>
            <Button className={s.blue}></Button>
          </div>
        </div>
        
        <div className={s.right}>
          <img src="./Home/Working.png" className={a.animateImg}/>
        </div>
      </div>
    </>
  )
}

export default Home