import React from 'react'
import './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Seyma Bayezit</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Contact Me</a>
            </li>
         
          </ul>
          <form class="form-inline my-2 my-md-0">
           
          </form>
        </div>
      </div>
    </nav>
  )
}
