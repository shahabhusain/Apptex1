import React from 'react'

const Solution = () => {
  return (
    <div className=' md:mx-24 mx-4 my-20 '>
    <h1 className=' md:text-[40px] sm:text-[32px] text-[22px] font-[700] text-[#B99762]'>Solution <span className=' font-medium text-black'>We Provided</span></h1>
    <p className=' text-[#606060] md:text-[17px] text-[13px] font-[500]'>The objective of the problem statement is to highlight the deficiencies or challenges within the existing system that need to be addressed.</p>

    <div className=' flex flex-col gap-8 pt-8'>

    <div className=' flex gap-4'>
        <h1 className=' text-[#B99762] text-[20px] font-medium'>1</h1>
        <div>
            <h2 className=' text-[#B99762] text-[20px] font-medium'>FFMPEG Integration & AWS Elastic Encoder</h2>
            <p className=' text-[#606060] text-[17px] font-[500]'>Collaborating with experienced FFMPEG developers to ensure a stable and optimized integration.Conducting extensive testing to identify and address potential performance issues on both mobile and web platforms.The AWS Elastic Encoder feature used for extreme video compression to reduce file size while maintaining high quality video and zero frame drops.</p>
        </div>
    </div>


    <div className=' flex gap-4'>
        <h1 className=' text-[#B99762] text-[20px] font-medium'>2</h1>
        <div>
            <h2 className=' text-[#B99762] text-[20px] font-medium'>Scalable Backend Architecture</h2>
            <p className=' text-[#606060] text-[17px] font-[500]'>Utilizing Node.js for the backend to take advantage of its non-blocking I/O model, which allows efficient handling of concurrent requests.Implementing load balancing and auto-scaling strategies to distribute traffic and ensure smooth performance during peak usage.</p>
        </div>
    </div>

    <div className=' flex gap-4'>
        <h1 className=' text-[#B99762] text-[20px] font-medium'>3</h1>
        <div>
            <h2 className=' text-[#B99762] text-[20px] font-medium'>Data Security and Privacy Measures</h2>
            <p className=' text-[#606060] text-[17px] font-[500]'>Implementing authentication and authorization mechanisms to protect user data stored in MongoDB.Utilizing secure access controls and encryption for communication with AWS S3 servers.</p>
        </div>
    </div>

    

    </div>
</div>
  )
}

export default Solution