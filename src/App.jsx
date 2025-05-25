import { createContext, useState } from 'react'
import './App.css'

// Navbar
import Navbar from './Navbar/Navbar'
// Page Components
import Home from "./Pages/Home/Home"
import Tasks from "./Pages/Tasks/Tasks"
import Folders from "./Pages/Folders/Folders"
import Contacts from "./Pages/Contacts/Contacts"
import Dashboard from './Pages/Dashboard/Dashboard'
// Authentication Components
import Login from "./Authentication/Login/Login"
import SignUp from "./Authentication/SignUp/SignUp"
// PageNotFound
import PageNotFound from './PageNotFound/PageNotFound'
import { BrowserRouter, Routes, Route} from "react-router-dom"

const router = [
  {path: "/Acad/", element: <Home/>},
  {path: "/Acad/Tasks", element: <Tasks/>},
  {path: "/Acad/Folders", element: <Folders/>},
  {path: "/Acad/Contacts", element: <Contacts/>},
  {path: "/Acad/Dashboard", element: <Dashboard/>},
  {path: "/Acad/Login", element: <Login/>},
  {path: "/Acad/SignUp", element: <SignUp/>},
  {path: "*", element: <PageNotFound/>}
]

export const context = createContext()

function App() {
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showMakeUserSignIn, setShowMakeUserSignIn] = useState(false)
  const [hideNavbar, setHideNavbar] = useState(false)

  const [user, setUser] = useState()
  const [userData, setUserData] = useState([])
  const [pages, setPages] = useState([
    {name: "Home", to: "/Acad/", ind: true, icon: "fa fa-home"},
    {name: "Tasks", to: "/Acad/Tasks", ind: false, icon: "fa fa-book"},
    {name: "Folders", to: "/Acad/Folders", ind: false, icon: "fa fa-folder"},
    {name: "Contacts", to: "/Acad/Contacts", ind: false, icon: "fa fa-phone"},
  ])

  const contextVariables = {
    // Booleans
    showSignUp,
    setShowSignUp,
    showLogin,
    setShowLogin,
    showMakeUserSignIn,
    setShowMakeUserSignIn,
    hideNavbar,
    setHideNavbar,

    // Arrays & Objects
    user,
    setUser,
    userData,
    setUserData,
    pages,
    setPages
  }

  return (
    <>
      <context.Provider value={contextVariables}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {
              router?.map(page => 
                <Route path={page.path} key={page.path} element={page.element}/>
              )
            }
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </>
  )
}

export default App
