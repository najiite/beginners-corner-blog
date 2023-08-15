import Link from 'next/link'

const Hero = () => {
  const Background = '/nbh.jpg'

  return (
    <>
            <div className="neu-shadow lg:h-[500px] h-fit lg:mx-20 m-2 mt-24 mb-12 grid grid-rows-2 lg:grid-cols-2">
                <div style={{ backgroundImage: `url(${Background})`}} className="lg:bg-auto rounded-b-sm bg-cover lg:h-[495px] bg-no-repeat bg-center "></div>
                <div className='lg:border-l-4 lg:h-[500px] lg:border-black'>
                    <div>
                      <Link  href={`/posts/post`} >
                        <div className='text-4xl lg:pt-10 p-5'>Adobe shares plunge on deal to acquire design platform Figma for $20 billion</div>
                      </Link>
                      <div className='p-5'>
                        Adobe announced Thursday that it will acquire design software firm Figma in a deal worth about $20 billion in cash and stock. Shares of Adobe sank 17%, their biggest plunge since 2010.

                        Figma, founded in 2012, creates cloud-based design software that allows teams to collaborate in real time. It competes head-to-head with Adobe's XD program.
                      </div>

                    </div>

                    <div className='flex lg:pt-[150px] justify-between p-5'>
                      <span>Article by Okeh Onajite</span>
                      <span>05/02/2023</span>

                    </div>

                </div>
            </div>
    </>
  )
}

export default Hero