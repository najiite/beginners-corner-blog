import Link from 'next/link'
import { toPlainText, toTimestring } from '@/lib/functions'
import {FaPen} from 'react-icons/fa'

const Hero = ({post}) => {
  return (
    <>
            <div className="lg:neu-shadow neu lg:h-[500px] h-fit lg:mx-16 m-2 mt-24 mb-12 grid grid-rows-2 lg:grid-cols-2">
                <div style={{ backgroundImage: `url(${post.mainImage.asset.url})`}} className="rounded-b-sm bg-cover lg:h-[495px]  bg-no-repeat bg-center ">
                  <div className='z-10 m-5'>
                      <span className='btn-primary'>Featured</span>
                  </div>
                  
                </div>
                <div className='relative lg:border-l-4 lg:h-[500px] lg:border-black'>
                    <div>
                      <Link  href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>
                        <div className='text-4xl lg:pt-10 p-5'>{post.title}</div>
                      </Link>
                      <div className='p-5'>{toPlainText(post.body).substring(0, 150)}...
                      </div>

                    </div>
                    <div className='p-5 mb-10'>
                      <Link className='btn-primary' href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>Read more</Link>
                    </div>

                    <div className='absolute bottom-0 mt-5 p-5'>
                      <div className='grid  gap-4 grid-cols-2 justify-between'>
                        <div className='flex justify-around'><FaPen size={15} /> <span>{post.author.name}</span></div>
                        <span>{toTimestring(post._createdAt)}</span>

                      </div>

                    </div>

                </div>
            </div>
    </>
  )
}

export default Hero