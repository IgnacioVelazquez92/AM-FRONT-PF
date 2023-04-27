import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter, Routes } from "react-router-dom";
import Admin from './pages/Admin';
import '../src/styles/App.css'
import Header from './components/header/Header';
function App() {

  return (
    <>
      <Header/>
      <Admin/>
    </>
      
      
  
  )
}

export default App
