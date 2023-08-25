import Link from 'next/link'
import React from 'react'

const PostLists = ({posts}) => {
  return (
    <div> 
         {
              posts.map((post)=> (
            <Link className='flex my-5 text-xl text-color' key={post._id} href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>{post.title} </Link>
            ))
          }

    </div>
  )
}

export default PostLists