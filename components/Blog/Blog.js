
import {PortableText} from '@portabletext/react'
import { toTimestring } from '@/lib/functions'
import Sharepost from '@/components/Blog/Sharepost'
const Blog = ({post}) => {
  return (
    <>
        <div className=' mt-24 lg:mt-40'>
            <img className='float-left w-[400px] h-[400px] object-center object-cover mr-5 mb-5 lg:mr-10 neu-shadow ' alt='post' src={post.mainImage.asset.url}></img>
            <h1 className='text-3xl font-semibold pb-5'>
                {post.title}
            </h1>
            <div className='flex justify-between'>
              <h1 className='text-purple-bg'><span>{post.categories[0]?.title}</span> <br></br> <span>Article by {post.author.name}</span></h1>
              <h1 className='text-purple-sm'>{toTimestring(post._createdAt)}</h1>

            </div>
            <PortableText value={post.body}/>
            <Sharepost slug={post.slug.current} />

        </div>

    </>
  )
}

export default Blog