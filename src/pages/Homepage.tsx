import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='h-[100vh]'>
      <span className='text-3xl text-primary font-bold'>Home Page</span>
      <button type='button' className='bg-blue-500 hover:bg-blue-700 text-primary font-bold py-2 px-4 rounded'>
        <Link to='/about'>Go to About</Link>
      </button>
    </div>
  )
}
