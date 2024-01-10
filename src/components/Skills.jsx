import React from 'react'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import java from '../assets/java.jpg'
import node from '../assets/node.png'
import angular from '../assets/angular.png'


const Skills = () => {
    return (
        <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-[#6efeeb]'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={html} alt="HTML icon"/>
                        <p>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={css} alt="CSS icon"/>
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={javascript} alt="JAVASCRIPT icon"/>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={react} alt="REACT icon"/>
                        <p>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={java} alt="JAVA icon"/>
                        <p>JAVA</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={angular} alt="ANGULAR icon"/>
                        <p>ANGULAR</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={node} alt="NODEJS icon"/>
                        <p>NODEJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] py-4' >
                        <img className='w-20 mx-auto' src={mongo} alt="MONGO icon"/>
                        <p>MONGODB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills