import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg-warning">
      <div class="container">
        <a class="navbar-brand" href="#">BLOG</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#blogNavbar" aria-controls="blogNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className='nav-link' href='/'>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar