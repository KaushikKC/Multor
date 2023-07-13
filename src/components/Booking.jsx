import React from 'react'
import BookingForm from './BookingForm'
import Benefit from './Benefit'

function Booking() {
  return (
    <div className='md:flex md:flex-row-reverse md:justify-around'>
        <div className='mt-[-80px]'>
            <BookingForm />
        </div>
        <div className='my-10 mb-20'>
            <Benefit />
        </div>
    </div>
  )
}

export default Booking