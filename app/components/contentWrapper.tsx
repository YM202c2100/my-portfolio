"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

interface ContentWrapperProps{
  children:ReactNode
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({children})=>{
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState<boolean>()
  const [originHeight, setOrigin] = useState<string>("0px")

  useEffect(()=>{
    if(wrapperRef.current){
      const elemHeightCenter = wrapperRef.current.offsetHeight/2
      const relativeYtoViewport = wrapperRef.current.getBoundingClientRect().y
      setOrigin(`${elemHeightCenter-relativeYtoViewport}px`)
    }
  },[menuOpen])

  return(<>
    <div 
      className={`bg-green-300 transition-[transform] duration-500 ease-in-out ${menuOpen ? "scale-75":"scale-100"}`}
      ref={wrapperRef}
    >
      {children}
    </div>
    <button onClick={()=>setMenuOpen(!menuOpen)} className="bg-white border-2 px-3 py-2 fixed top-0 right-0">メニュー</button>
  </>)
}

export default ContentWrapper