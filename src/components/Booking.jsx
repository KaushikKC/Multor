import React from 'react'
import BookingForm from './BookingForm'
import Benefit from './Benefit'
import Fade from 'react-reveal/Fade';

function Booking() {
  return (
    <div className='flex md:flex-row-reverse md:justify-around flex-col items-center'>
      <Fade>
        <div className='mt-[-80px] md:mt-[-180px]'>
            <BookingForm />
        </div>
      </Fade>
        <div className='my-10 mb-20 md:mb-40'>
            <Benefit />
        </div>
    </div>
  )
}

export default Booking