import React from 'react'
import doctorSmile from '../assets/doctorSmile.jpg'
import {FaUserMd} from 'react-icons/fa'
import {FaTruck} from 'react-icons/fa'
import {FaBed} from 'react-icons/fa'


const About = () => {
  return (
    <div name='About' className='p-8 md:p-[3rem] md:pb-0 w-full h-full grid md:grid-cols-3 gap-2'>
        
        <div>
           <img className='rounded-md hidden md:block  h-full w-full lg:h-3/4 object-cover' src={doctorSmile} alt='img'/>
        </div>

        <div className='col-span-2 flex flex-col  pt-6 md:mx-5'>
            <h3 className='text-sm md:text-[18px] mb-10 border-b-4 border-b-indigo-500 w-fit'>About Us</h3>

            <h1 className='text-2xl md:text-4xl md:w-3/4 mb-4'>Best Medical Care For Yourself and Your Family</h1>
            <p className='text-sm md:font-medium mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus esse alias iusto quibusdam architecto nostrum animi quos. Voluptate, veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus esse alias iusto quibusdam architecto nostrum animi quos. Voluptate, veritatis.</p>

            <div className='grid lg:grid-cols-3 text-white gap-3 pt-6'>

                <div className='flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-900 py-4 px-2 rounded justify-center  '>
                    <FaUserMd size={20} /> 
                    <h3 className='font-medium text-sm'>Qulified Doctors</h3>
                </div>
               
                <div className='flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-900 py-4 px-2 rounded justify-center  '>
                    <FaBed size={20} /> 
                    <h3 className='font-medium text-sm'>Emergency Services</h3>
                </div>
               
                <div className='flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-900 py-4 px-2 rounded justify-center  '>
                    <FaTruck size={20} /> 
                    <h3 className='font-medium text-sm'>Free Ambulance</h3>
                </div>
            
                <div className='flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-900 py-4 px-2 rounded justify-center  '>
                    <FaUserMd size={20} /> 
                    <h3 className='font-medium text-sm'>Qulified Doctors</h3>
                </div>
               
                <div className='flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-900 py-4 px-2 rounded justify-center  '>
                    <FaBed size={20} /> 
                    <h3 className='font-medium text-sm'>Emergency Services</h3>
                </div>
               
                <div className='flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-900 py-4 px-2 rounded justify-center  '>
                    <FaTruck size={20} /> 
                    <h3 className='font-medium text-sm'>Free Ambulance</h3>
                </div>

            </div>
        </div>

    </div>
  )
}

export default About