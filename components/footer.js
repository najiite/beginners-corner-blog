import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaArrowRight} from 'react-icons/fa'

const footer = () => {
  return (
    
    <div>
        <div className='bg-color sm:flex sm:gap-10 sm:justify-between mt-10 sm:px-24 px-5 py-10 text-white'>
            <div>
                <p className='font-bold text-3xl font-logo pb-5'>RetroBlog</p>
                <p className='text-xl'>Category</p>
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
                <div className=''>
                    All rights reserved 2023 RetroBlog
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
                    <div>
                        About the blog, retro blog is a daily lifestyle blog, we cover everything from fashion, technology, health, art e.t.c
                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default footer