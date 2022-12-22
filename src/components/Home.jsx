import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-black  text-gray-300 pl-10' >Home
        
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Hi, my name is</p>
            <h1 className='text-red-900 text-4xl sm:text-7xl font-bold'>Michel Marques</h1>
            <h2 className='text-4xl sm:text-7xl font-bold' > I'm a Full-stack Developer</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>qualified to build and sometimes design some digital projects. 
            Currently, I'm focused on building full-stack web applications with React and Node.</p>
        {/* <div>
            <button className='border-2 group px-6 py-3 my-2 flex items-center hover:bg-red-700 hover:border-red-700'>
                View Work
                <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </button>
        </div> */}
        </div>

        </div>
    )
}

export default Home