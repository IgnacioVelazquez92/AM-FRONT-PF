import '../../styles/header.css'
import React from 'react'
import Navbar from '../navbar/Navbar'
import SocialIcons from '../navbar/SocialIcons'
import Dropdowns from '../navbar/Dropdowns'

const Header = () => {
  return (
    <header className='d-flex flex-column '>
      <SocialIcons />
      <Navbar />
      <Dropdowns />
    </header>
  )
}

export default Header