import React from 'react'
import './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5 mt-2 ">
      <div className="container">
        <a className="navbar-brand text-white" href="#">Seyma Bayezit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">Contact Me</a>
            </li>
         
          </ul>
          <form className="form-inline my-2 my-md-0">
           
          </form>
        </div>
      </div>
    </nav>
  )
}
