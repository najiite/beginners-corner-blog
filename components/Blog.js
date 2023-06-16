
import {PortableText} from '@portabletext/react'
import { toTimestring } from '@/lib/functions'
const Blog = ({post}) => {
  return (
    <>
        <div className=' mt-24 lg:mt-40 lg:mx-20 mx-3'>
            <img className='float-left w-[400px] h-[400px] object-center object-cover mr-5 mb-5 lg:mr-10 neu-shadow ' alt='post' src='/pool.jpg'></img>
            <h1 className='text-3xl font-semibold pb-5'>
                {post.title}
            </h1>
            <div className='flex justify-between'>
              <h1 className='underline  underline-color decoration-4'><span>Article by {post.author.name}</span></h1>
              <h1>{toTimestring(post._createdAt)}</h1>

            </div>
            <PortableText value={post.body}/>

        </div>

    </>
  )
}

export default Blog