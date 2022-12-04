import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <nav className='nav-container'>
        <Link to='/' className='nav-item'>Todos</Link>
        <Link to='/project' className='nav-item'>Choose Project</Link>
    </nav>
  )
}
