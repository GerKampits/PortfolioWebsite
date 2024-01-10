import React from 'react'
import schl from '../assets/schl.jpg'
import school from '../assets/school.jpg'
import shop from '../assets/shop.jpg'
import tracker from '../assets/tracker.jpeg'
import social from '../assets/social.jpg'
import social1 from '../assets/social1.jpg'
import movie from '../assets/movie.jpg'

const Work = () => {
    return (
        <div name= 'work' className='w-full md:h-screen bg-[#0a192f] text-gray-300' > 
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#6efeeb]' >Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* Container */}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  
                  {/* Grid Item */}
                   <div style={{backgroundImage: `url(${schl})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                       
                       {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Java Spring Application
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GerKampits/schoolapp-jax-rs-hibernate">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${shop})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                       
                       {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                E-shop
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GerKampits/e-shop">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${tracker})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                       
                       {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Exercise tracker app
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="https://github.com/GerKampits/exerciseTrackerApp-backend">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>back</button>
                                </a>
                                <a href="https://github.com/GerKampits/exerciseTrackerApp-frontend">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>front</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${school})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                       
                       {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaEE School App
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GerKampits/schoolapp-jax-rs-hibernate">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    {/* <div style={{backgroundImage: `url(${social1})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        */}
                       {/* Hover Effects */}
                        {/* <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Social Android App
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GerKampits/FirebaseAndroidApp">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div> */}


                    <div style={{backgroundImage: `url(${social})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                       
                       {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Social Media App
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GerKampits/SocialMediaApp">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${movie})` }}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                       
                       {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Movies Android app
                            </span>
                            <div className='pt-8 text-center'>
                            <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/GerKampits/MoviesApp">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
                
        </div>
    )
}

export default Work