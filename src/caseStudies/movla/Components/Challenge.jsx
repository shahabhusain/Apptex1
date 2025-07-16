import React from 'react'

const Challenge = () => {
  return (
    <div className=' md:mx-24 mx-4 mt-20 '>
    <h1 className=' md:text-[40px] sm:text-[32px] text-[22px] font-[700] text-[#B99762]'>Challenges <span className=' font-medium text-black'>We Face</span></h1>
    <p className=' text-[#606060] md:text-[17px] text-[13px] font-[500]'>The objective of the problem statement is to highlight the deficiencies or challenges within the existing system that need to be addressed.</p>

    <div className=' flex flex-col gap-8 pt-8'>

    <div className=' flex gap-4'>
        <h1 className=' text-[#B99762] text-[20px] font-medium'>1</h1>
        <div>
            <h2 className=' text-[#B99762] text-[20px] font-medium'>Video Optimization and Processing</h2>
            <p className=' text-[#606060] text-[17px] font-[500]'>Integrating and configuring FFMPEG as the primary plugin for video processing and editing. Ensuring smooth and efficient video processing on both the mobile and web platforms</p>
        </div>
    </div>


    <div className=' flex gap-4'>
        <h1 className=' text-[#B99762] text-[20px] font-medium'>2</h1>
        <div>
            <h2 className=' text-[#B99762] text-[20px] font-medium'>Backend Management and Scalability</h2>
            <p className=' text-[#606060] text-[17px] font-[500]'>Designing and implementing a scalable backend architecture to handle concurrent API requests from the mobile and web clients.Managing server resources effectively to provide optimal performance during peak usage.</p>
        </div>
    </div>

    <div className=' flex gap-4'>
        <h1 className=' text-[#B99762] text-[20px] font-medium'>3</h1>
        <div>
            <h2 className=' text-[#B99762] text-[20px] font-medium'>Data Security and Privacy</h2>
            <p className=' text-[#606060] text-[17px] font-[500]'>Implementing robust security measures to protect user registration data stored in MongoDB.Ensuring secure access to AWS S3 servers for video storage and retrieval.</p>
        </div>
    </div>


    </div>
</div>
  )
}

export default Challenge