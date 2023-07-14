import React from 'react'
import Box from "@mui/material/Box";
import video from '../Images/appointment.mp4'



function ReasonSection() {
   
    
  return (
    <Box
        sx={{
            backgroundColor: '#E8FBFB',
            height: '750px',
        }}
    >
        <div className='flex flex-col justify-center items-center space-y-5 text-center h-full px-3'>
            <h1 className='text-5xl font-bold md:w-[600px] md:mt-[0] mt-[-150px] leading-[60px] text-[#152F2E]'>Show visitors what they're signing up for</h1>
            <p className='md:w-[600px] mb-[70px] text-[#152F2E]'>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</p>
            <div className='' >
            
            <video className='w-[900px] mb-[-200px] mt-5' src={video} autoPlay loop='true'></video>
            </div>
            
        </div>
        
    </Box>
  )
}

export default ReasonSection