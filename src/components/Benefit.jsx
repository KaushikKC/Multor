import React from 'react'
import computer from '../Images/monitor.png'
import medal from '../Images/medal.png'
import heartbeat from '../Images/heart-beat.png'

const data = [
    {
        id: 1,
        icon: computer,
        title: 'Benefit 1',
        desc: "Highlight the benefits of signing up for an appointment, online class, or video consultation."

    },
    {
        id: 2,
        icon: heartbeat,
        title: 'Benefit 2',
        desc: "For example, fitness instructors might describe how their routines make people healthier *and* happier."

    },
    {
        id: 3,
        icon: medal,
        title: 'Benefit 3',
        desc: "Remind visitors how easy it is to claim your offer and start enjoying the benefits."
    }
    ]


function Benefit() {
  return (
    <div className='my-10 p-3'>
        {data.map((item) => (
            <div key={item.id} className='flex mb-10 md:space-x-4 md:mt-10'>
                <div className='w-20 md:w-14 mr-6  flex items-center'>
               <img src={item.icon} alt="" />
               </div>
                <div className='space-y-4'>
                    <h1 className=' text-xl md:text-2xl font-bold'>{item.title}</h1>
                    <p className='md:text-lg md:w-[400px]'>{item.desc}</p>
                </div>
            </div>
        ))}
       
    </div>
  )
}

export default Benefit