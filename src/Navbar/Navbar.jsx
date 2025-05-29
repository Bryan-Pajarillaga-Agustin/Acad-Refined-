import React, { useContext, useEffect } from 'react'
import s from "./Navbar.module.css"
import { context } from '../App'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {pages, pagination, user, hideNavBar, setHideNavBar, hideSideBar, setHideSideBar} = useContext(context)
  useEffect(()=>{
    console.log(pages)
  },[pages])


  return <>
    <nav className={hideNavBar ? s.hideSideBar : s.navBar}>
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
              onClick={()=>{pagination(i)}}>
              <i className={page.icon}></i>
              <span>{page.name}</span>
              <span className={s.indicator}></span>
            </Link>
          )
        }
      </div>

      <div className={s.authWrapper}>
        <AuthButtons user={user}/>
        <button 
          className={s.hamButton}
          onClick={()=>{hideSideBar ? setHideSideBar(false) : setHideSideBar(true)}}>
            <i className="fa fa-list-ul" ></i>
        </button>
      </div>
    </nav>

    <nav className={hideSideBar ? s.hideSideBar : s.sideBar}>
      <ul className={hideSideBar ? s.hideNavLinks : s.NavLinks}>
        <button className={s.hamButton} onClick={()=>{hideSideBar  ? setHideSideBar(false) : setHideSideBar(true)}} ><i className="fa fa-list-ul" ></i></button>
        {
          pages?.map((page,i) => 
            <Link 
              to={page.to} 
              key={page.name} 
              className={page.ind ? `${s.indicated} ${s.Links}` : s.Links}
              onClick={()=>{pagination(i)}}>
              <i className={page.icon}></i>
              <span>{page.name}</span>
            </Link>)
        }
      </ul>
    </nav>
  </>
}

// Authentication Buttons Component

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