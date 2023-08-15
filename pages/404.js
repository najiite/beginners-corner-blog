import Layout from "@/components/Layout/Layout"
import Link from "next/link"
const Custom404 = () => {
  return (
    <>
        <Layout>
            <div className="grid justify-center text-center mt-24">
                <h1 className="text-9xl">404</h1>
                <h2>Aha! You see! You can be wrong!</h2>
                <p>(or it could be us)</p>
                <h2>... either way, you should probably go back to the </h2>
            </div>
            <div className="flex justify-center mt-5">
                <Link className='btn' href='/' >homepage</Link>
            </div>
        </Layout>
    </>
  )
}

export default Custom404