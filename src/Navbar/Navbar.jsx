import React, { useContext, useEffect } from 'react'
import s from "./Navbar.module.css"
import { context } from '../App'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {pages, setPages, user} = useContext(context)
  useEffect(()=>{
    console.log(pages)
  },[pages])

  function handlePagination(index) {
    setPages(prev => prev.map((page, i)=>{
      if(i === index) {
        return {...page, ind: true}
      }

      return {...page, ind: false}
    }))
  }

  return (
    <nav className={s.navBar}>
      <div className={s.titleWrapper}>
        <h1>Acad</h1>
      </div>

      <div className={s.links}>
        {
          pages?.map((page,i) => 
            <Link 
              to={page.to} 
              key={page.name} 
              className={page.ind ? `${s.indicated} ${s.Links}` : s.Links}
              onClick={()=>{handlePagination(i)}}>
              <i className={page.icon}></i>
              <span>{page.name}</span>
              <span className={s.indicator}></span>
            </Link>
          )
        }
      </div>

      <div className={s.authWrapper}>
        <AuthButtons user={user}/>
      </div>
    </nav>
  )
}

const AuthButtons = ({user}) => {
  if(user) {
    return <>
      <button className={s.leftButt}>Account</button>
      <button className={s.rightButt}>Sign Out</button>
    </>
  }

  return <>
    <button className={s.leftButt}>Login</button>
    <button className={s.rightButt}>SignUp</button>
  </>
}

export default Navbar