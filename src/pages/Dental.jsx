import React from 'react'
import img1 from '../images/Horse Stable.png'
import img2 from '../images/Contacts.png'
import img3 from '../images/Schedule.png'
import img4 from '../images/comb.png'
import img5 from '../images/helena.jpg'

const Dental = () => {
  return (
    <div className='flex mt-9'>
        <div className='w-1/4 bg-[#F4F4F4] min-h-screen'>

<div className=' p-5 font-semibold pt-8'>
<div className='flex py-3'><img src={img1} alt=' Horses'/> <h1 className='pl-3 pt-2'>Horses</h1></div>
<div className='flex py-3'><img src={img2} alt=' Horses'/> <h1 className='pl-3 pt-2'>Contacts</h1></div>
<div className='flex py-3'><img src={img3} alt=' Horses'/> <h1 className='pl-3 pt-2'>Schedule</h1></div>
<div className='flex py-3'><img src={img4} alt=' Horses'/> <h1 className='pl-3 pt-2'>Reports</h1></div>
</div>
</div>

<div className='pt-6 space-x-28 font-quicksand  '>
    <p className='font-extrabold pl-96'>ADD Dental</p>
    <p className='font-extrabold'>Select Horses</p>
    <img src={img5} className='w-10 h-10 rounded-full'/>
</div>
    </div>
  )
}

export default Dental