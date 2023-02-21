import React ,{ useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaWhatsappSquare } from 'react-icons/fa'

const Contact = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    return (
    <div  name='Contact' className='mt-5 md:h-screen px-8 py-8  bg-gradient-to-r from-indigo-500
    to-indigo-900 w-full grid items-center md:grid-cols-3 gap-3'>
            <div className='md:col-span-2'>
            <h1 className='text-2xl font-bold text-white'>Beyond Care</h1>
            <p className='md:w-4/6 text-justify text-sm text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis in laboriosam perferendis nulla nisi vitae distinctio non eum. Id ratione voluptatibus amet expedita temporibus nulla tenetur vel obcaecati iure.<br/>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis in laboriosam perferendis nulla nisi vitae distinctio non eum. Id ratione voluptatibus amet expedita temporibus nulla tenetur vel obcaecati iure.
            </p>

          <div className='mt-10 text-white'>
            <h6 className='text-[20px] font-bold'>Follow us</h6>
            <div className='mt-3 flex gap-5 text-3xl'>
          <AiFillFacebook className=' cursor-pointer'/>
            <AiFillInstagram className=' cursor-pointer'/>
            <FaWhatsappSquare className=' cursor-pointer'/>

            </div>
          </div>

            </div>

            <div>
           <form className='p-4 bg-white/80 rounded-md md:w-3/4 h-full'>
            <h3 className='font-semibold'>Schedule Your Consultation</h3>
            <p className='text-sm'>Select an appointement</p>
            <DatePicker
                className='p-2 rounded-md mt-3 bg-white/70 w-full'
                selected={selectedDate}
                onChange={date => setSelectedDate(date)} 
                minDate={new Date()}
                placeholderText={'Select a day'}
        />
    
                 <button className='py-2 px-3 mt-10 rounded-md bg-indigo-900 w-full text-white hover:bg-white/70 hover:text-indigo-900 ease-in-out duration-500 text-sm'>Schedule Your Consultation</button>

           </form>
            </div>

    </div>
  )
}

export default Contact
