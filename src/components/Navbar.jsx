import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [ menu , setMenu ] = useState(false)

    const menuToggle = () =>{
       setMenu(!menu) 
    }

    const navList = [
        {
           id:1,
            page : 'Home',
        },
        {
           id:2,
            page : 'About',
        },
        {
           id:3,
            page : 'Testimonials',
        },
        {
           id:4,
            page : 'Contact',
        },

    ]

    const [search, setSearch] = useState('')

    return (
   
    <div  className='px-4 h-20 w-full text-white flex justify-between  items-center absolute z-10 '>
        <div>
            <h1 className={menu ? 'hidden' : 'text-2xl font-bold'}>Beyond Care</h1>
        </div>
        
            <ul className='hidden md:flex gap-3'>
            {
                navList.map((item) => (
                    <li key={item.id}>
                        <Link to={item.page} smooth={true}  duration={500}>{item.page}</Link>
                    </li>
                ))
            }  
            </ul>
     

        <div className='flex justify-center items-center gap-3'>
           <div className='hidden md:flex border rounded-md px-2 py-1  '>
         
            <input onChange={(e)=> setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} className='bg-transparent outline-none font-light' type='text' placeholder='Search For Section..' />
            
            <Link to={search} smooth={true}  duration={500}>
            <BiSearchAlt2 size={20}  className='icon hidden md:block '/>
            </Link>
           </div>
            <BsPerson size={20}  className='icon hidden md:block ' />
            <div className='md:hidden z-10' onClick={menuToggle} >
            {
                !menu ? <HiOutlineMenuAlt4 size={20} className='icon block md:hidden'/>
                : <AiOutlineClose size={20} className='icon block text-black md:hidden '/>
            }
            </div>
            
          
        </div>
          
        <div className={menu ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                <h1 className='text-2xl font-bold'>Beyond Care</h1>

                {
                navList.map((item) => (
                    <li className='border-b border-black/10 py-3' key={item.id}>
                        <Link to={item.page} smooth={true}  duration={500}>{item.page}</Link>
                    </li>
                ))
            }  
        

                    <div className='text-white mt-3 flex flex-col gap-3'>
                    <button className='ml-2 bg-gradient-to-r from-indigo-500 to-indigo-900 py-2 px-3 rounded-md'>Search</button>
                    <button className='ml-2 bg-gradient-to-r from-indigo-500 to-indigo-900 py-2 px-3 rounded-md'>Account</button>
                    </div>
                </ul>
                
            </div>

    </div>
  )
}

export default Navbar