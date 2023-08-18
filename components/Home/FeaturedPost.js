import Link from 'next/link'
import { toPlainText, toTimestring } from '@/lib/functions'
import {FaPen} from 'react-icons/fa'

const Hero = ({post}) => {
    if (post === null)
    return(
      <></>
    )
  return (
    <>
      
          <Link  href={`/posts/[slug]`} as={`/posts/${post?.slug.current}`}>
            <div className="lg:neu-shadow neu lg:h-[500px] h-fit lg:mx-16 m-2 mt-24 mb-12 grid grid-rows-2 lg:grid-cols-2">
                <div style={{ backgroundImage: `url(${post.mainImage.asset.url})`}} className="rounded-b-sm bg-cover lg:h-[495px]  bg-no-repeat bg-center ">
                  <div className='z-10 m-5'>
                      <span className='btn-primary'>Featured</span>
                  </div>
                  
                </div>
                <div className='relative lg:border-l-4 lg:h-[500px] h-fit lg:border-black'>
                    <div>
                        <div className='text-4xl lg:pt-10 p-5'>{post.title}</div>
                      
                      <div className='p-5 lg:block hidden'>{toPlainText(post.body).substring(0, 850)}...
                      </div>
                      <div className='p-5 lg:hidden block'>{toPlainText(post.body).substring(0, 150)}...
                      </div>
                    </div>
                    <div className='p-5 mb-10'>
                      <span className='btn-primary' href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>Read more</span>
                    </div>

                    <div className='absolute bottom-0 mt-5 p-5'>
                      <div className='grid  gap-4 grid-cols-2 justify-between'>
                        <div className='flex justify-start'><span className='m-1'><FaPen size={15} /></span> <span>{post.author.name}</span></div>
                        <span>{toTimestring(post?._createdAt)}</span>

                      </div>

                    </div>

                </div>
            </div>
          </Link>
    </>
  )
}

export default Hero