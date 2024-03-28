// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className="textstructure mt-52  px-20">
                {["we Create", "Eye Opening", "Presentation"].map((item, index) => {
                    return (
                        <div className="masker " key={index}>
                            <div className="w-fit flex">
                                {index ===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[9vw] mr-[.5vw] rounded-md h-[4.6vw] bg-red-600 relative top-3'> </motion.div>)}
                                <h1 className='text-8xl leading-[5.5vw] tracking-tighter font-medium uppercase' >{item}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <p className='text-md font-light tracking-tight leading-none' key={index}>{item}</p>
                    )
                })}
                <div className='start'>
                    <div className='px-4 py-2 border-[2px] border-zine-500 rounded-full font-light text-sm capitalize'>start the project</div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
