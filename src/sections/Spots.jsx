import React from 'react'
import { spots } from '../utils/data'

const Spots = () => {
  return (
    <section className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
      {spots.map((spot) => (
        <div key={spot.id} className='grid gap-6 grid-cols-3'>
          <img className='col-span-1' src={spot.imgUrl} alt={spot.title} />
          <div className='col-span-2 flex flex-col justify-between'>
            <h1 className="text-3xl lg:text-4xl font-bold text-grayish">{spot.id}</h1>
            <a className='text-lg lg:text-xl hover:text-red font-bold' href="#">{spot.title}</a>
            <p className='text-base leading-7 text-dark-grayish'>{spot.desc}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Spots
