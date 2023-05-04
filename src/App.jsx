import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { createBrowserRouter, RouterProvider, createRoutesFromElements,Route } from "react-router-dom";
import {routes} from './Routes/routes'
import '../src/styles/App.css'
import RootLayout from './layout/RootLayout'
import UserContext from '../context/UserContext';
import NewUserContext from '../context/NewUserContext'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      {
        routes.map(({path, Element, index})=>(
          <Route key={path} path={path} element ={<Element/>} />
        ))
      }
    </Route>
  )
)
function App() {
  const [user, setUser] = useState({})
  const [newUser, setNewUser] = useState({})
  return (
    <>
    <NewUserContext.Provider value={{newUser, setNewUser}}>
      <UserContext.Provider value={{user,setUser} }>
        
        <RouterProvider router={router}/>

      </UserContext.Provider>

    </NewUserContext.Provider>

    
    </>
  )
}

export default App
