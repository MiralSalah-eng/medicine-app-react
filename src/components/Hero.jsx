import React from 'react'
import  heroVid from '../assets/HeroVid.mp4'
const Hero = () => {
  return (
    <div name='Home' className='w-full h-screen relative'>
        <video className='w-full object-cover h-full' src={heroVid} autoPlay loop muted />

        <div className="w-full h-full bg-indigo-900/20 absolute top-0 left-0">
        </div>
        <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-white'>
        <h1>Best Medical Care</h1>
        <h2 className='text-sm py-1 md:text-md md:py-3 font-light'>We Provide High Solutions For Your Health</h2>
            <form className=''>
                <input className='w-[200px] border outline-none  md:w-[400px] px-3 py-2  mt-2 rounded-md text-white bg-transparent' type='text' placeholder='Enter your E-mail'/>
                <button className='ml-2 bg-gradient-to-r from-indigo-500 to-indigo-900 py-2 px-3 rounded-md 
                 hover:text-xl ease-in-out duration-300'>Contact</button>
            </form>
        </div>
    </div>
  )
}

export default Hero