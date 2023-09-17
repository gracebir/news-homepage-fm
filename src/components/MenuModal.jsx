import React from 'react'
import { navItems } from '../utils/data'
import { motion } from 'framer-motion'

const MenuModal = () => {
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
     className='fixed inset-0 flex lg:hidden justify-end h-screen top-0 right-0 bg-black bg-opacity-30 z-30'>
      <motion.div
      initial={{
        x: "100%"
      }}
      whileInView={{
        x: "0"
      }}
       className='h-full w-4/5 bg-off-white py-40 px-6'>
        <div className='flex flex-col gap-6'>
          {navItems.navLinks.map((item)=> (
            <a className='font-medium' key={`1-${item}`} href="#">{item}</a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MenuModal
