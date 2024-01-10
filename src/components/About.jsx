import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className = 'sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#6efeeb]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>I'm Gerasimos, welcome to my page! Please take a look 
                            around and if anything catches your attention,
                            feel free to contact me through my social pages!
                        </p>
                    </div>
                    <div>
                        <p>
                        I am actively seeking opportunities within the Software Development field. I am particularly interested in roles that allow me to blend my healthcare 
                        expertise with technology to contribute to innovative solutions and improve overall efficiency in this industry. My transition into software development, 
                        represents a natural evolution of my commitment to enhance people's well-being.
                        I am actively exploring opportunities as I am excited to 
                        bring my unique perspective, empathy, and skills to a dynamic software development team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About