"use client"

import { motion } from "framer-motion"

const WarpPortal = ()=>{
  return(
    <div className='flex justify-center my-[40px]'>
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

export default WarpPortal