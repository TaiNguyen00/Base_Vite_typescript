import { ReactNode } from 'react'
import '../styles/index.css'
import { ThemeControl } from 'components'

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='bg-baseBackground'>
      <ThemeControl />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
