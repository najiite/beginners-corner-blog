import Head from 'next/head'
import Navbar from '@/components/Layout/navbar'
import Footer from '@/components/Layout/footer'

const Layout = ({children, title }) => {
  return (
    <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
        </Head>
        
        <Navbar />
        {children}
        <Footer />

    </>
  )
}
Layout.defaultProps ={
  title: "Beginners Corner"
}

export default Layout