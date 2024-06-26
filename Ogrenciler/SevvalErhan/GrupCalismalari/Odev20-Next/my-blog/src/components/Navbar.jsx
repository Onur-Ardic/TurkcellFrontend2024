import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container">
        <a className="navbar-brand" href="#">BLOG</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#blogNavbar" aria-controls="blogNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='nav-link' href='/'>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar