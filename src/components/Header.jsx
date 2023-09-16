import React, { useState } from 'react'
import { navItems } from '../utils/data'
import MenuModal from './MenuModal'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="container mx-auto flex items-center justify-between py-6 lg:py-10">
      <img src={navItems.logo} alt="logo" />
      <nav className='hidden lg:flex space-x-10'>
        {navItems.navLinks.map((item)=> (
          <a className='text-lg text-dark-grayish hover:text-red font-medium' key={item} href="#">
            {item}
          </a>
        ))}
      </nav>
      <button onClick={()=> setIsOpen(!isOpen)} className='block lg:hidden z-50'>
        <img src={isOpen ? navItems.close : navItems.hamburger } alt="menu" />
      </button>
      {isOpen && <MenuModal/>}
    </header>
  )
}

export default Header
