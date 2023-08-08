import React from 'react'
import img1 from '../images/Horse Stable.png'
import img2 from '../images/Contacts.png'
import img3 from '../images/Schedule.png'
import img4 from '../images/comb.png'
import img from '../images/khan.jpg'
import pic from '../images/umar.jpg'
import pic1 from '../images/snow.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Harry = () => {
  return (
    <div className='flex'>
         <div className='w-1/4 bg-[#F4F4F4] min-h-screen'>

<div className=' p-5 font-semibold pt-8'>
<div className='flex py-3'><img src={img1} alt=' Horses'/> <h1 className='pl-3 pt-2'>Horses</h1></div>
<div className='flex py-3'><img src={img2} alt=' Horses'/> <h1 className='pl-3 pt-2'>Contacts</h1></div>
<div className='flex py-3'><img src={img3} alt=' Horses'/> <h1 className='pl-3 pt-2'>Schedule</h1></div>
<div className='flex py-3'><img src={img4} alt=' Horses'/> <h1 className='pl-3 pt-2'>Reports</h1></div>
</div>
</div>

<div>
    <div className='pt-6 pl-36 space-x-28 font-quicksand  '>
    
    <Tabs>
    <TabList  className='flex gap-x-5'>
      <Tab>
      <button className=' border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white '>Activiy</button>
      </Tab>
      <Tab>
    <button className=' border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white '>Reminders</button>

      </Tab>
      <Tab>
    <button className=' border rounded-xl w-44 px-10 py-1 hover:bg-[#000032] hover:text-white '>Details</button> 

      </Tab>
    </TabList >

    <TabPanel>
      <h2><div className='  w-full pt-8 pr-12 pl-2 pb-4 h-[85%] border-b shadow-orange-50 '>
      <div className='flex-col pl-2 '>
        
        <h1 className=' font-semibold pb-2'>Basic Information</h1>
        <img src={img} className='w-10 h-10 rounded-full'/>
       <div className='flex'> <h2 className=' font-semibold'> Name</h2> <p className=''>: Yasir Afridi</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>father Name</h2><p className=''>: Gul nawas Afridi</p></div>
       <div className='flex'>  <h2 className=' font-semibold'> Location</h2><p className=''>: koragh mardan</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'> full Address</h2><p className=''>: MAlak abad road korag mardan</p></div>
       <hr />

       <h1 className=' font-semibold pt-2 '>STALL INFORMATION</h1>
       <div className='flex pb-2'> <h2 className=' font-semibold'>Stall #</h2> <p className=''>: 24</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>IMPORTANT DATES</h1>
       <div className='flex'> <h2 className=' font-semibold'>starting Renewal Dates</h2> <p className=''>: 25-Jun-2024</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Last  Dates</h2><p className=''>: 26-Jun-2023</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>FEED AM SHCEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       
       <h1 className=' font-semibold  pt-2 '>LUNCH SHEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       <hr />

      </div>
    </div></h2>
    </TabPanel>
    <TabPanel>
      <h2>
      <div className='  w-full pt-8 pr-12 pl-2 pb-4 h-[85%] border-b shadow-orange-50 '>
      <div className='flex-col pl-2 '>
        
        <h1 className=' font-semibold pb-2'>Important Informaton</h1>
        <img src={pic1} className='w-20 h-20 rounded-full'/>
       <div className='flex'> <h2 className=' font-semibold'>Barn Name</h2> <p className=''>: Avallyn Bruce</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Paddock Name</h2><p className=''>: Avallyn Bruce</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Paddock Location</h2><p className=''>: The highland stable</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Paddock Notes</h2><p className=''>: The exact location of highland stable</p></div>
       <hr />

       <h1 className=' font-semibold pt-2 '>STALL INFORMATION</h1>
       <div className='flex pb-2'> <h2 className=' font-semibold'>Stall #</h2> <p className=''>: 24</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>IMPORTANT DATES</h1>
       <div className='flex'> <h2 className=' font-semibold'>Coggins Renewal Dates</h2> <p className=''>: 25-Jun-2024</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Last Coggins Dates</h2><p className=''>: 26-Jun-2023</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>FEED AM SHCEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       
       <h1 className=' font-semibold  pt-2 '>LUNCH SHEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       <hr />

      </div>
    </div>
      </h2>
    </TabPanel>
    <TabPanel>
    <div className='  w-full pt-8 pr-12 pl-2 pb-4 h-[85%] border-b shadow-orange-50 '>
      <div className='flex-col pl-2 '>
        
        <h1 className=' font-semibold pb-2'>Detail</h1>
        <img src={pic} className='w-20 h-20 rounded-full'/>
       <div className='flex'> <h2 className=' font-semibold'>Phone number</h2> <p className=''>: +913171622342</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Email</h2><p className=''>: yasirafridi977@gmail.com</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>facbook</h2><p className=''>: yasir Afridi</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>tiktok</h2><p className=''>: yasir afridi 446</p></div>
       <hr />

       <h1 className=' font-semibold pt-2 '>STALL INFORMATION</h1>
       <div className='flex pb-2'> <h2 className=' font-semibold'>Stall #</h2> <p className=''>: 24</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>IMPORTANT DATES</h1>
       <div className='flex'> <h2 className=' font-semibold'>Coggins Renewal Dates</h2> <p className=''>: 25-Jun-2024</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Last Coggins Dates</h2><p className=''>: 26-Jun-2023</p></div>
       <hr />

       <h1 className=' font-semibold  pt-2 '>FEED AM SHCEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       
       <h1 className=' font-semibold  pt-2 '>LUNCH SHEDULE</h1>
       <div className='flex'> <h2 className=' font-semibold'>alfalfa cubes</h2> <p className=''>: 2 1/4 flakes</p></div>
       <div className='flex pb-2'>  <h2 className=' font-semibold'>Smartpak</h2><p className=''></p></div>
       <hr />

      </div>
    </div>   
     </TabPanel>
  </Tabs>

    

    </div>
    
    
   </div>
    </div>

    
  )
}

export default Harry