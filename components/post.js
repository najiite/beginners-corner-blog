import React from 'react'

const post = () => {
  return (
    <div>
        <div className="border-2 border-black m-2  grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2">
                <div className="lg:bg-auto rounded-b-sm bg-cover bg-no-repeat bg-center bg-[url('/pool.jpg')]"></div>
                <div className='lg:border-l-2  lg:border-black'>
                    <div>
                      <h1 className='text-lg font-semibold lg:pt-5 p-5'>
                        Adobe shares plunge on deal to acquire design platform Figma for $20 billion</h1>
                      <div className='p-5'>
                        Adobe announced Thursday that it will acquire design software firm Figma in a deal worth about $20 billion in cash and stock. Shares of Adobe sank 17%, their biggest plunge since 2010.
                        </div>

                    </div>

                    <div className='flex justify-between p-5 text-sm'>
                      <h1 className='underline  underline-color decoration-4'><span>Article by Okeh Onajite</span></h1>
                      <h1>05/02/2023</h1>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default post