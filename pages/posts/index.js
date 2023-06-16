import Posts from '@/components/posts'
import Layout from '@/components/Layout'

import {client} from '@/backend/SanityClient';

export async function getStaticProps() {
  const query = `*[_type == "post"] | order(_createdAt desc)[0..3]{
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
  return (
    <>
      <Layout>
        <Posts posts={posts} />
      </Layout >
    </>
  )
}

export default index