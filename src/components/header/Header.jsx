import '../../styles/header.css'
import React from 'react'
import Navbar from '../navbar/Navbar'
import SocialIcons from '../navbar/SocialIcons'

const Header = () => {
  return (
    <header className='d-flex flex-column'>
      <SocialIcons />
      <Navbar />
    </header>
  )
}

export default Header