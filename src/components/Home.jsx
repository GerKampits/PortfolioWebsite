import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#6efeeb]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gerasimos Kampitsis</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a software developer</h2>
            <p className=' text-[#8892b0] py-4 max-w-[700px]'>As an idividual with a passion for helping 
            others regain their optimal physical well-being and a background in Health Sciences, 
            I have decided to embark on a new and exciting journey in the realm of Software Development. 
            My experience has instilled in me a deep appreciation for holistic well-being and the importance of 
            leveraging technology to enhance healthcare outcomes.
            I'm eager to apply my analytical mindset, problem-solving abilities and commitment to continuous improvement in a new context. 
           </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6efeeb] hover:border-text-[#6efeeb] hover:text-[#0a192f]'>
                View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
        </div>
        
        
        
        </div>


    </div>
    )
}

export default Home