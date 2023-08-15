import Link from "next/link"
import { useState, useEffect, useContext} from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const HandleNav = () => {
        setNav(!nav)
    } 


    const boxVariant = {
        hidden : {
            x: "-100vw",
        },
        visible : {
            x: 0, 
            transition: {
                duration: 1,
                when: "beforeChildren",
                delayChildren: 0.5,
                staggerChildren: 0.2 
            }
        } 
    } 
    const listVariant = {
        hidden : {
            x: -10,
            opacity: 0
        },
        visible : {
            x: 0,
            opacity: 1,
        }
    }

  return (
    <>
    
        <div className="fixed bg-white top-0 left-0 w-full z-10 ease-in duration-300 ">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
                    <Link className=" mr-5" href='/'>
                        <h1  className="font-bold lg:text-4xl bg-color border-4 border-black text-white p-2 text-3xl">Beginners Corner</h1>
                    </Link>
                    
                    <ul className="hidden lg:flex ml-10">
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/posts'><motion.span>Posts</motion.span></Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='#about'>About</Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='#contact'>Contact</Link>
                        </motion.li>
                    </ul>
                    <form className="hidden lg:block">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                            <input type="search" className="relative flex-auto block px-3 outline-none py-1.5 bg-clip-padding border-0 border-b-2 border-b-black" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </span>
                        </div>
                    </form>
                    <div className="lg:hidden block z-10">
                        { nav ? <AiOutlineClose size={20} onClick={HandleNav}  style={{color: `white`}}/> : <AiOutlineMenu size={20}  onClick={HandleNav} />}
                        
                    </div>
                <motion.div 
                    className={nav ?"lg:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300": "lg:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" } 
                    variants={boxVariant}
                    initial="hidden"
                    animate="visible"
            >
                    <ul>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/posts'>Posts</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='#about'>About</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='#contact'>Contact</Link>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            
        </div>
    </>
  )
}

export default Navbar