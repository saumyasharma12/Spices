import React from 'react'
import RightSection from './RightSection'
import AllCompany from './AllCompany'
import RegisterProcess from './RegisterProcess'
import Gst from './Gst'
import GstCard from './GstCard'

const Allright = () => {
  return (
    <div className='text-start'>
        <RightSection/>
        <AllCompany/>
        <RegisterProcess/>
        <Gst/>
        <GstCard/>
    </div>
  )
}

export default Allright