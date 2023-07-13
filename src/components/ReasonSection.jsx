import React, { useEffect, useRef, useState } from 'react'
import Box from "@mui/material/Box";
import video from '../Images/appointment.mp4'
import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player';


function ReasonSection() {
    let [shouldPlay, updatePlayState] = useState(false);

 let handleEnterViewport = function () {
  updatePlayState(true);
 };
 let handleExitViewport = function () {
  updatePlayState(false);
 };

    
  return (
    <Box
        sx={{
            backgroundColor: '#E8FBFB',
            height: '750px',
        }}
    >
        <div className='flex flex-col justify-center items-center space-y-5 text-center h-full'>
            <h1 className='text-5xl font-bold w-[600px]  leading-[60px] text-[#152F2E]'>Show visitors what they're signing up for</h1>
            <p className='w-[600px] mb-[70px] text-[#152F2E]'>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</p>
            <div className='' >
            <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
                <div>
                <ReactPlayer
                    playing={shouldPlay}
                    url={video}
                />
                </div>
            </Waypoint>
            </div>
            

        </div>
        
    </Box>
  )
}

export default ReasonSection