import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1 className='text-primary text-4xl'>About Page</h1>
      <button className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-primary'>
        <Link to='/home'>Back to home</Link>
      </button>
    </div>
  )
}

export default About
