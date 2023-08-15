import Link from 'next/link'
import {AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'

const Sharepost = ({slug}) => {
  const origin = 'https://beginnerscorner.com'

    const URL = `${origin}/posts/${slug}`;
  return (
    <div className='mt-2'>
        <h3>Share :)</h3>
        <div className='flex justify-start gap-2 mt-2'>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=`+URL} target='_blank' ><AiFillFacebook className='text-[#1877F2]' size={40} /></Link>
            <Link href={`https://twitter.com/intent/tweet?text=`+URL} ><AiFillTwitterCircle className='text-[#14171A]' size={40} /></Link>
            <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=`+URL} ><AiFillLinkedin className='text-[#0077b5]' size={40} /></Link>
        </div>
    </div>
  )
}

export default Sharepost