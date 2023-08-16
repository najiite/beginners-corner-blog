import Link from 'next/link'
import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaArrowRight} from 'react-icons/fa'

const footer = () => {
  return (
    
    <div className='bg-color'>
        <div className='sm:flex sm:gap-10 sm:justify-between mt-24 sm:px-24 px-5 py-10  text-white'>
            <div>
                <p className='font-bold text-3xl font-logo pb-5 alt-text-color'>Beginners Corner</p>
                <p className='text-xl'>Categories</p>
                <ul className='text-base sm:flex sm:justify-between'>
                    <li>Art</li>
                    <li>Tech</li>
                    <li>Health</li>
                    <li>Lifestyle</li>
                    <li>DIY</li>
                </ul> 
                <p className='pt-5 pb-3'>Follow Us</p>
                <div className='text-center flex justify-start sm:justify-evenly pb-5'>
                   
                    
                    <div className='border rounded-full border-orange-100 p-2 mr-2'>
                        <FaEnvelope size={20}/>
                    </div>
                    <div className='border rounded-full border-orange-100 p-2 mr-2'>
                        <FaFacebookF size={20}/>
                    </div>
                    <div className='border rounded-full border-orange-100 p-2 mr-2'>
                        <FaInstagram size={20}/>
                    </div>
                    <div className='border rounded-full border-orange-100 p-2 mr-2'>
                        <FaTwitter size={20}/>
                    </div>

                </div>

            </div>
            <div className='sm:w-1/3'>
                <p>Brighten up your inbox</p>
                    <form>
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                            <input type="text" className="relative flex-auto block bg-transparent px-3 outline-none py-1.5 bg-clip-padding border-0 border-b-2 border-b-white" placeholder="Join our Newsletter" />
                            <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-white text-center whitespace-nowrap rounded" id="basic-addon2">
                            <FaArrowRight size={20}/>
                            </span>
                        </div>
                    </form>
                    <div className=' text-sm font-extralight'>
                    Welcome to Beginners Corner, your go-to destination for conquering new challenges with confidence. Whether you're stepping into the world of hobbies, cooking, fitness, or beyond, we're here to guide you through every first step. Our mission is to provide beginners like you with practical advice, inspiring stories, and a supportive community. Join us as we embark on exciting journeys together!
                     </div>
            </div>
        </div>
        <div className='lg:flex grid lg:justify-between justify-center lg:px-10 text-center text-xs border-t border-violet-100/20 text-violet-200 py-4'>
                <div className=''>
                    All rights reserved 2023 Beginners Corner
                </div>
                <div className='flex justify-around gap-2'>
                    <Link href='/' >Terms and Conditions</Link>
                    <Link href='/' >Privacy Policy</Link>
                    <Link href='/' >Disclaimer</Link>
                </div>

        </div>
        
    </div>
  )
}

export default footer