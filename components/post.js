import React from 'react'
import Link from 'next/link'
import { toPlainText, toTimestring } from '@/lib/functions'

const post = ({post}) => {
  return (
    <div>
        <div className="border-2 border-black grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 min-h-full">
                <div style={{ backgroundImage: `url(${post.mainImage.asset.url})`}} className="rounded-b-sm bg-cover bg-no-repeat bg-center"></div>
                <div className='lg:border-l-2  lg:border-black'>
                    <div>
                      <Link href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>
                        <div className='text-lg font-semibold lg:pt-5 p-5'>{post.title}</div>
                      </Link>
                      <div className='px-5'>{toPlainText(post.body).substring(0, 150)}...</div>

                    </div>

                    <div className='p-5'>
                      <Link className='btn-primary' href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>Read more</Link>
                    </div>

                    <div className='flex justify-between px-5 text-sm'>
                      <span>Article by {post.author.name}</span>
                      <span>{toTimestring(post._createdAt)}</span>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default post