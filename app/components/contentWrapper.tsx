import { ReactNode } from "react"

interface ContentWrapperProps{
  children:ReactNode
}

const ContentWrapper:React.FC<ContentWrapperProps> = ({children})=>{
  return(
    <div>
      {children}
    </div>
  )
}

export default ContentWrapper