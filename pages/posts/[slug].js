
import Layout from '@/components/Layout'
import Blog from '@/components/Blog'
import {client} from '@/backend/SanityClient'

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
  const blog  = await client.fetch(query)
  const querySimilar = `*[_type == "post"] | order(_createdAt desc)[0]{
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
  return {
    props: {
      blog: blog,
      similar: similar,
    },
 };
}
const post = ({blog,similar}) => {
  /*console.log(similar)*/
  return (
    <>
      <Layout title={blog.title}>
        <Blog  post={blog} />
        <h3 className='lg:mx-20 mx-3 mt-12'>See Also</h3>
        <Blog  post={similar} />
      </Layout >
    </>
  )
}
export default post