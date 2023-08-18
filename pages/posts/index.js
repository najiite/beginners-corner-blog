import Posts from '@/components/PostLayout/posts'
import Layout from '@/components/Layout/Layout'
import { useState, useEffect } from "react";

import {client} from '@/backend/SanityClient';

export async function getStaticProps() {
  const query = `*[_type == "post"] | order(_createdAt desc)[0..19]{
    _id,
    _createdAt,
    title,
    slug,
    mainImage{
      asset->{
        _ref,
        url
      },
    },
    body,
    author->{
      name,
      image{
        asset->{
          _ref,
          url
          }, 
        },
      slug,
    },
  }`
  const posts = await client.fetch(query)

  return {
    props: {
      posts,
    },
 };
}

const index = ({posts}) => {
  const AllPostsquery = `*[_type == "post"]| order(_createdAt desc){
    _id,
    _createdAt,
    title,
    slug,
  }`
  const [poststotal, setPoststotal] = useState()
  const [ref, setRef] = useState((posts.length-1) +20) //Posts per page
  useEffect(() => {
    client.fetch(AllPostsquery)
  .then((result) => {setPoststotal(result.length)})
  .catch(console.error);
  }, []);
  const loadMore = async ()=>  {
    await client.fetch(
      
      `*[_type == "post"] | order(_createdAt desc)[${(posts.length)}..${ref}]{
        _id,
        _createdAt,
        title,
        slug,
        mainImage{
          asset->{
            _ref,
            url
          },
        },
        body,
        author->{
          name,
          image{
            asset->{
              _ref,
              url
              }, 
            },
          slug,
        },
      }`
    ).then((result) => {posts.push(...result)})
    .catch(console.error);
    setRef((ref + ref)-1)
  }
  return (
    <>
      <Layout>
        <div className='lg:px-16 px-3'>
          <h1 className='heading'>Latest Posts</h1>
          <Posts loadMore={loadMore} posts={posts} poststotal={poststotal} />

        </div>
      </Layout >
    </>
  )
}

export default index