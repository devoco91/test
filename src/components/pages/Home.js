import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div> 
        <h1>React Examples</h1>
        <Link to='/login'>
        <button type='button'>Login</button>
        </Link>
    </div>
  )
}

export default Home