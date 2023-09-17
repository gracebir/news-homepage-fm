import React, { useState } from 'react'
import { navItems } from '../utils/data'
import MenuModal from './MenuModal'
import { AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="py-6 lg:py-10 w-full sticky top-0 bg-off-white z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-0">
        <img src={navItems.logo} alt="logo" />
        <nav className='hidden lg:flex space-x-12'>
          {navItems.navLinks.map((item) => (
            <a className='text-lg text-dark-grayish hover:text-red font-medium' key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className='block lg:hidden z-50'>
          <img src={isOpen ? navItems.close : navItems.hamburger} alt="menu" />
        </button>
      </div>
      {isOpen && <AnimatePresence><MenuModal /></AnimatePresence>}
    </header>
  )
}

export default Header
