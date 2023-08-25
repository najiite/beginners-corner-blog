
import Layout from '@/components/Layout/Layout'
import Blog from '@/components/Blog/Blog'
import {client} from '@/backend/SanityClient'
import PostLists from '@/components/Blog/PostLists'

export async function getStaticPaths() {
  const query = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    slug,
  }`
  const posts = await client.fetch(query)
  const paths = posts.map((post)=>(
    {
      params: {slug: post.slug.current},
    }
  ))
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({params}) {

  const query = `*[_type == "post"][slug.current == "${params.slug}"][0]{
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
    categories[]->{title, _id},
  }`
  const RecentpostsQuery = `*[_type == "post" && slug.current != "${params.slug}"] | order(_createdAt desc)[1..5]
  {
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
    categories[]->{title, _id},
  }`

  /**
   * const querySimilar = `*[_type == "post" && slug.current != "${params.slug}"] | order(_createdAt desc)[0]
  {
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
    categories[]->{title, _id},
  }`
  const similar = await client.fetch(querySimilar)
  */

  const blog  = await client.fetch(query)
  const RecentPosts = await client.fetch(RecentpostsQuery)
  return {
    props: {
      blog: blog,
      /**similar: similar || null, */
      Recent: RecentPosts
    },
    revalidate: 10, // Seconds
 };
}
const post = ({blog, Recent}) => {
  return (
    <>
      <Layout title={blog.title}>
        <div className='lg:mx-20 mx-3'>
          <Blog  post={blog} />

          {/*
          { similar === null ? (<></>):(<>
          <h3>New</h3>
          <Blog  post={similar} />
          </>)}
          */}
          
          <h1 className='heading-sm'>Recent Posts</h1>
          <PostLists posts={Recent} />

          {/*
          <h1 className='heading-sm'>Featured Posts</h1>
          <PostLists posts={Recent} />
          */}

        </div>
      </Layout >
    </>
  )
}
export default post