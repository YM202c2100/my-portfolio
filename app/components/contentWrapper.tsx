"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

interface ContentWrapperProps{
  children:ReactNode
}

interface ScaleOrigin{
  x:number
  y:number
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({children})=>{
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState<boolean>()
  const [scaleOrigin, setOrigin] = useState<ScaleOrigin>({x:0, y:0})

  useEffect(()=>{
    if(wrapperRef.current){
      const boundingClientRect = wrapperRef.current.getBoundingClientRect()
      const relativeYtoViewport = boundingClientRect.y

      const newScaleOrigin:ScaleOrigin = {x:boundingClientRect.width/2,y:boundingClientRect.height/2-relativeYtoViewport}
      setOrigin(newScaleOrigin)
    }
  },[menuOpen])

  return(<>
    <div 
      className={`
        bg-green-300 
        transition-[transform] duration-500 ease-in-out
        origin-center 
        ${`origin-[${scaleOrigin.x}px_${scaleOrigin.y}px]`} 
        ${menuOpen ? "scale-75":"scale-100"}`}
      ref={wrapperRef}
    >
      {children}
    </div>
    <button onClick={()=>setMenuOpen(!menuOpen)} className="bg-white border-2 px-3 py-2 fixed top-0 right-0">メニュー</button>
  </>)
}

export default ContentWrapper