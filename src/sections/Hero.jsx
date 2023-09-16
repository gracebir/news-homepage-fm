import React from 'react'
import News from '../components/News'
import { hero } from '../utils/data'

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:gap-7 lg:grid-cols-6">
      <div className="col-span-1 lg:col-span-4 grid grid-cols-1 gap-7">
        <div className={`${hero.bgImage} w-full h-[40vh]`} />
        <div className='grid grid-cols-1 lg:gap-10 lg:grid-cols-2 gap-6'>
          <h1 className="font-extrabold text-5xl lg:text-6xl">{hero.title}</h1>
          <div className='flex flex-col justify-between gap-6 lg:gap-0 items-start'>
            <p className='text-start text-dark-grayish lg:text-lg text-base'>{hero.info}</p>
            <button className='uppercase tracking-widest font-medium text-off-white bg-red hover:bg-dark-blue px-4 lg:px-6 py-2 lg:py-3'>
              read more
            </button>
          </div>
        </div>
      </div>
      <News />
    </section>
  )
}

export default Hero
