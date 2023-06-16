import React from 'react'
import Post from './post'

const posts = ({posts}) => {
  return (
    <div>
        <h1 className='heading'>Latest Posts</h1>

        <div className='lg:mx-20 mt-10 mb-12 grid gap-2 lg:grid-cols-2'>
            
          {
              posts.map((post)=> (
            <Post key={post._id} post={post}  />
            ))
          }

        </div>
        <div className='flex justify-center'>
          <button className='btn'>
            Load more
          </button>
        </div>
    </div>
  )
}

export default posts