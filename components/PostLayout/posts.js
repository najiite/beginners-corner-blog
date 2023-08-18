import React from 'react'
import Post from './post'
import Pagination from '@/components/Blog/Pagination'

const posts = ({posts, loadMore, poststotal}) => {
  return (
    <div>

        <div className='mt-10 mb-12 grid gap-4 lg:grid-cols-2'>
            
          {
              posts.map((post)=> (
            <Post key={post._id} post={post}  />
            ))
          }

        </div>
        <Pagination  loadMore={loadMore} posts={posts} poststotal={poststotal} />
    </div>
  )
}

export default posts