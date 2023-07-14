import React from 'react'
import img1 from '../Images/Feature1.jpg'
import img2 from '../Images/Feature2.jpg'
import img3 from '../Images/Feature3.jpg'
import { Box } from '@mui/material'

function Features() {
  return (
    <div>
        <Box
        sx={{
            backgroundColor: '#E8FBFB',
            padding: '16px',
            color : '#1F2937'
        }}
    >
        
	<div className="container md:w-[1150px] mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
			<img src={img1} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold">FEATURE 1</h3>
				<p className="my-6 text-gray-600 text-lg">Talk about some of the details of your offer with a focus on the value people get back.</p>	
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row-reverse">
			<img src={img2} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold">FEATURE 2</h3>
				<p className="my-6 text-gray-600 text-lg">Is there a pain point that your service resolves? Tell visitors about it here.</p>	
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
			<img src={img3} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">	
				<h3 className="text-3xl font-bold">FEATURE 3</h3>
				<p className="my-6 text-gray-600 text-lg">Alternatively, you could use this section to address some frequently asked questions.</p>
			</div>
		</div>
	</div>

</Box>
			
    </div>
  )
}

export default Features