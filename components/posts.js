import React from 'react'
import Post from './post'

const posts = () => {
  return (
    <div>
        <h1 className='lg:mx-24 mx-5 text-4xl line-through underline-color decoration-4'>Latest</h1>

        <div className='lg:mx-20 mt-24 mb-12 grid gap-2 lg:grid-cols-2'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

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