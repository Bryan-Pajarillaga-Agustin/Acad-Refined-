import { useState } from 'react'
import s from './NavBar.module.css'
import { useContext, useEffect } from 'react'
import { context } from '../App'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'

const NavBar = () => {
    const { pages, setPages, hideSideBar, setHideSideBar } = useContext(context)
    function changeTab(i) {
        setPages(prev => prev.map((tab, index) =>
            index == i ?
                { ...tab, ind: true } :
                { ...tab, ind: false }
        ))
    }

    function handlePagination() {

    }

    useEffect(()=>{
        console.log(hideSideBar)
    },[hideSideBar])

    return (
        <>
            <div className={s.navBarWrapper}>
                <div className={s.left}>
                    <img src="./web-icon.png" />
                    <h1 className={s.title}>
                        Acad
                    </h1>
                </div>
                <div className={s.mid}>
                    <ul>
                        {
                            pages?.map((tab, i) => {
                                return (
                                    <Link
                                        to={tab.path}
                                        key={tab.name}
                                        className={tab.ind ? `${s.ind} ${s.Links}` : `${s.notInd} ${s.Links}`}
                                        onClick={() => changeTab(i)}
                                    >
                                        <span className={s.content}>
                                            {tab.icon}
                                            {tab.name}
                                        </span>
                                        <span className={s.indicator}></span>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={s.right}>
                    <button className={s.authButts}><Link to={"/Acad/SignIn"} className={s.Links}>Sign In</Link></button>
                    <button className={s.authButts}><Link to={"/Acad/SignUp"} className={s.Links}>Sign Up</Link></button>
                    <button className={s.HamburgerButt} onClick={()=>{setHideSideBar(false)}}><i className="fa fa-list-ul"></i></button>
                </div>
            </div>

            <div className={hideSideBar == false ? s.sidebar : s.hideSideBar}>
                <ul className={hideSideBar == false ? s.NavLinks : s.hideNavLinks}>
                    <Button className={s.HamburgerButt} func={() => { !hideSideBar ? setHideSideBar(true) : setHideSideBar(false) }} content={(<i className="fa fa-list-ul" ></i>)}></Button>
                    {
                        pages.map((link, i) => {
                            return (
                                <Link
                                    to={link.path}
                                    key={link.path}
                                    onClick={() => { changeTab(link, i) }}
                                    className={link.ind ? `${s.Links} ${s.indicated}` : `${s.Links} ${s.notIndicated}`}>
                                    {link.icon}
                                    <span>
                                        {link.name}
                                        <span className={s.indication}></span>
                                    </span>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NavBar