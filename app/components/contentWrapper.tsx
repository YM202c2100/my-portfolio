"use client"

import { ReactNode, useState } from "react"

interface ContentWrapperProps{
  children:ReactNode
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({children})=>{
  const [menuOpen, setMenuOpen] = useState<boolean>()
  return(
    <div className={`bg-green-300 transition-[transform] duration-500 ease-in-out ${menuOpen ? "scale-75":"scale-100"}`}>
      {children}
      <button onClick={()=>setMenuOpen(!menuOpen)} className="border-2 px-3 py-2">メニュー</button>
    </div>
  )
}

export default ContentWrapper