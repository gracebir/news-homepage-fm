import React from 'react'
import { navItems } from '../utils/data'

const MenuModal = () => {
  return (
    <div className='fixed inset-0 flex lg:hidden justify-end h-screen top-0 right-0 bg-black bg-opacity-30 z-30'>
      <div className='h-full w-4/5 bg-off-white py-40 px-6'>
        <div className='flex flex-col gap-6'>
          {navItems.navLinks.map((item)=> (
            <a className='font-medium' key={`1-${item}`} href="#">{item}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuModal
