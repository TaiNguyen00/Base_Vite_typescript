import './styles/index.css'
import { ThemeControl } from 'components'

function App() {
  return (
    <div className='bg-baseBackground h-[100vh] w-[100vw]'>
      <h1 className='text-4xl text-primary'>Hello World</h1>
      <ThemeControl />
    </div>
  )
}

export default App
