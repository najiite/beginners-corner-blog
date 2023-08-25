
import {PortableText} from '@portabletext/react'
import { toTimestring } from '@/lib/functions'
import Sharepost from '@/components/Blog/Sharepost'
import ImageComponent from './ImageComponent'

const Blog = ({post}) => {
  
  return (
    <>
        <div className=' mt-24 lg:mt-40'>
            <img className='float-left w-full h-full object-center object-cover mr-5 mb-5 lg:mr-10 neu-shadow ' alt={post.title} src={post.mainImage.asset.url}></img>
            <div className='text-3xl font-semibold pb-5'>
                {post.title}
            </div>
            <div className='flex justify-between'>
              <div className='text-purple-bg'><span>Article by {post.author.name}</span></div>
              <div className='text-purple-sm' suppressHydrationWarning={true}>{toTimestring(post._createdAt)}</div>

            </div>
            <PortableText 
                value={post.body} 
                components={{
                    // ...
                    types: {
                      image: ImageComponent,
                    },
                  }}/>
            <Sharepost slug={post.slug.current} />

        </div>

    </>
  )
}

export default Blog