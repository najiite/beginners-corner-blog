import {useContext} from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  const textVariant = {
    hidden: {
      y: "5vw",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.25,
      },
    }
  }


  return (
    <>
            <div className="neu-shadow lg:h-[500px] h-fit lg:mx-24 m-2 mt-24 mb-12 grid grid-rows-2 lg:grid-cols-2">
                <div className="lg:bg-auto rounded-b-sm bg-cover lg:h-[495px] bg-no-repeat bg-center bg-[url('/nbh.jpg')]"></div>
                <div className='lg:border-l-4 lg:h-[500px] lg:border-black'>
                    <div>
                      <h1 className='text-4xl lg:pt-10 p-5'>Adobe shares plunge on deal to acquire design platform Figma for $20 billion</h1>
                      <div className='p-5'>
                        Adobe announced Thursday that it will acquire design software firm Figma in a deal worth about $20 billion in cash and stock. Shares of Adobe sank 17%, their biggest plunge since 2010.

                        Figma, founded in 2012, creates cloud-based design software that allows teams to collaborate in real time. It competes head-to-head with Adobe's XD program.
                      </div>

                    </div>

                    <div className='flex lg:pt-[150px] justify-between p-5'>
                      <h1 className='underline  underline-color decoration-4'><span className='p-4'>Article by Okeh Onajite</span></h1>
                      <h1>05/02/2023</h1>

                    </div>

                </div>
            </div>
    </>
  )
}

export default Hero