import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const Layout = ({children, title }) => {
  return (
    <>
        <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
        </Head>

        <Navbar />
            {children}
        <Footer />

    </>
  )
}
Layout.defaultProps ={
  title: "Retro Blog"
}

export default Layout