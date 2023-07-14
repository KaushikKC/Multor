import { Box } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box 
        sx={{
            backgroundColor: '#152f2e',
            height: '150px',
        }}
    >
        <div className='flex flex-col md:flex-row justify-between px-[100px] text-center items-center space-y-2 py-[30px] md:px-[400px] md:py-[50px]'>
            <img className='w-[130px]' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg" alt="" />
            <p className='text-white text-sm font-extralight font-sans'>© 2023 Insert Name Here. All rights reserved</p>
        </div>

    </Box>
  )
}

export default Footer