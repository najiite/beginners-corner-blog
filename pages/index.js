import Hero from '@/components/hero'
import Posts from '@/components/posts'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Posts />
      </Layout >
    </>
  )
}
