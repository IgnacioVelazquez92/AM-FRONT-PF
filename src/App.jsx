import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter, Routes } from "react-router-dom";
import '../src/styles/App.css'
import Header from './components/header/Header';
import Emailjs from './components/navbar/Emailjs';
function App() {

  return (
    <>

    <Header />
    <Emailjs />
    </>
  )
}

export default App
