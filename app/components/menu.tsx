"use client"

import { AnimatePresence, motion } from "framer-motion"
import { exit } from "process"
import { useState } from "react"

interface LayoutProps{
  className?:string
}

const Menu:React.FC = ()=>{
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  const WarpPortal = ()=>{
    const portalAppearanceAnimation ={
      initial:{scale:0},
      animate:{scale:1},
      exit:{
        scale:0,
        transition:{duration:0.1}
      }
    }
    return(
      <motion.div 
        className='fixed z-10 w-full h-full flex justify-center items-center'
        variants={portalAppearanceAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >

        <motion.div
          className="landscape:h-[90%] portrait:w-[90%] aspect-square bg-[#1c1a34] rounded-full blur-sm"
          style={{boxShadow:
            "-10px -10px 15px #db2a45, 0px -15px 20px #1e569b, 10px -10px 10px #1c1a34, 15px 0 20px #47ddf4, 10px 10px 20px #1c1a34, 0px 10px 10px #451e72, -11px 10px 20px #1c1a34"}}
          animate={{rotate:360}}
          transition={{repeat:Infinity, ease:"linear", duration:1.5}}
        />
      </motion.div>
    )
  }

  const MenuButton:React.FC<LayoutProps> = ({className})=>{
    return(
      <button 
        className={`fixed z-30 top-10 right-10 w-14 h-14 rounded-full bg-gray-100 border-2 border-sky-300 ${className}`}
        onClick={()=>{setMenuOpen(!isMenuOpen)}}>
      </button>
    )
  }


  return(<>
    <div className="fixed z-50">
      <MenuButton/> 
      <AnimatePresence>
        {isMenuOpen && <WarpPortal/>}
      </AnimatePresence> 
    </div>
  </>)
}

export default Menu