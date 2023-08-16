import FeaturedPost from '@/components/Home/FeaturedPost'
import Posts from '@/components/posts'
import Layout from '@/components/Layout/Layout'

import {client} from '@/backend/SanityClient';
import { useState, useEffect } from "react";

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
  const Featuredquery = `*[_type == "post"] | order(_createdAt desc)[0]{
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
  const Featuredpost = await client.fetch(Featuredquery)

  return {
    props: {
      posts,
      Featuredpost,
    },
 };
}

export default function Home({posts, Featuredpost}) {
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
        <FeaturedPost post={Featuredpost} />
        <div className='lg:px-16 px-3'>
          <h1>Latest Posts</h1>
          <Posts loadMore={loadMore} posts={posts} poststotal={poststotal} />

        </div>
      </Layout >
    </>
  )
}
