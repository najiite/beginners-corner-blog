import Link from "next/link"
import { useState, useEffect, useContext} from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from "framer-motion"
import Search from "./Search"

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
                        <div  className="font-bold lg:text-4xl bg-color border-4 border-black text-white hover:alt-text-color p-2 text-3xl">Beginners Corner</div>
                    </Link>
                    
                    <ul className="hidden lg:flex ml-10">
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/posts'><motion.span>Posts</motion.span></Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/about'>About</Link>
                        </motion.li>
                        <motion.li className="lg-navElements"  whileHover={{scale: 1.2}}>
                            <Link href='/contact'>Contact</Link>
                        </motion.li>
                    </ul>
                    <Search />
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
                            <Link href='/about'>About</Link>
                        </motion.li>
                        <motion.li onClick={HandleNav}  className="sm-navElements" variants={listVariant}>
                            <Link href='/contact'>Contact</Link>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            
        </div>
    </>
  )
}

export default Navbar