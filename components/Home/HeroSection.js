import React from 'react'

const HeroSection = ({title, description}) => {
  return (
    <div className='block justify-items-center text-center bg-color text-white py-20'>
        <h1 className='text-5xl'>{title}</h1>
        <p className=' alt-text-color'>{description}</p>
    </div>
  )
}
HeroSection.defaultProps ={
    title: "Beginners Corner",
    description: 'Beginners Corner'
  }
  
export default HeroSection