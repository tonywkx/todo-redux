import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <nav>
        <span>test navigation</span>
        <Link to='/'>Todos</Link>
        <Link to='/project'>Choose Project</Link>
    </nav>
  )
}
