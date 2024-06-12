"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface LayoutProps{
  className?:string
}

const WarpPortal = ()=>{
  return(
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center r'>
      <motion.div
        className='w-96 h-96 bg-[#1c1a34] rounded-full blur-sm'
        style={{boxShadow:
          "-10px -10px 15px #db2a45, 0px -15px 20px #1e569b, 10px -10px 10px #1c1a34, 15px 0 20px #47ddf4, 10px 10px 20px #1c1a34, 0px 10px 10px #451e72, -11px 10px 20px #1c1a34"}}
        animate={{rotate:360}}
        transition={{repeat:Infinity, ease:"linear", duration:1.5}}
      />
    </div>
  )
}

const Menu:React.FC = ()=>{
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  const MenuButton:React.FC<LayoutProps> = ({className})=>{
    return(
      <button 
        className={`fixed top-10 right-10 w-14 h-14 rounded-full bg-gray-100 border-2 border-sky-300 ${className}`}
        onClick={()=>{setMenuOpen(!isMenuOpen)}}>
      </button>
    )
  }


  return(<>
    <div className="fixed z-50">
      <MenuButton/>  
      {isMenuOpen && <WarpPortal/>}
    </div>
  </>)
}

export default Menu