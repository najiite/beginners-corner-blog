import HeroSection from '@/components/Home/HeroSection'
import Layout from '@/components/Layout/Layout'

const contact = () => {
  return (
    <>
      <Layout>
        <HeroSection title='Contact Us' description='Get in contact with us' />
        <div className='lg:px-16 px-5'>
            <h2>Get in Touch:</h2>
            <p>We're excited to hear from you! Whether you have questions, suggestions, or just want to say hello, there are a few ways to reach out.</p>
            
            <h2>Email:</h2>
            <p>Feel free to send us an email at <a className='text-color' href='mailto:contact@beginnerscorner.com'>contact@beginnerscorner.com</a>. We make an effort to respond as promptly as possible to all inquiries.</p>

            <h2>Share Your Stories:</h2>
            <p>Have a success story or a journey you'd like to share? We'd love to feature your experiences on our blog. Reach out using any of the methods above.</p>

            <p>We value your input and look forward to hearing from you. Thank you for being a part of the Beginners Corner community!</p>
        </div>
      </Layout >
    </>
  )
}

export default contact