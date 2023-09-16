import React from 'react'
import { news } from '../utils/data'

const News = () => {
    return (
        <div className='col-span-1 flex flex-col gap-8 text-off-white lg:col-span-2 bg-dark-blue px-6 py-8'>
            <h1 className='text-2xl text-orange lg:text-4xl font-bold'>New</h1>
            <div className='flex flex-col justify-between gap-6 lg:gap-0 flex-1'>
                {news.map((item, index) => (
                    <div 
                    key={item.id} 
                    className={`${news.length - 1 === index ? `border-none`:`border-b`} border-dark-grayish pb-5 lg:pb-7 flex flex-col lg:gap-4 gap-2`}>
                        <a href='#' className='text-lg lg:text-xl hover:text-orange font-extrabold'>{item.title}</a>
                        <p className='text-grayish text-sm lg:text-base lg:leading-8 leading-6'>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News
