import React from 'react'
import landingImage from '../assets/food.jpg'
import appImage from '../assets/appdownload.jpeg'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
          Pick your take away today!
        </h1>
        <span className='text-xl'>Food is just a click away. </span>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={appImage} alt="" />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Order Takeaway faster!
          </span>
          <span>
            Download our app for faster ordering and personalized recommendations.
          </span>
          <div className='py-4 '>
            <button className='p-2 bg-black text-white rounded-md mr-2'>Play Store</button>
            <button className='p-2 bg-black text-white rounded-md mr-2'>App Store</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage