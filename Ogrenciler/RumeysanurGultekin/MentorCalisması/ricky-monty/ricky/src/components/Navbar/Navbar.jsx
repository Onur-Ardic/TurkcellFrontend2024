import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../../App.css"

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-lighnt bg-light mb-4">
        <div class="container">
          <Link to="/" className="fs-3 navbar-brand">
                Ricky & Morty <span className="text-primary">Wiki</span>
              </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <style jsx>{`
                button[aria-expanded="false"] > .close {
                  display: none;
                }
                button[aria-expanded="true"] > .open {
                  display: none;
                }
              `}</style>
              <i class="fa-solid fa-bars open"></i>
              <i class="fa-regular fa-circle-xmark close"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div>
                    <NavLink activeClassName="active mx-3" className="text-dark text-decoration-none mx-3" to="/" >Characters</NavLink>
                    <NavLink activeClassName="active mx-3" className="text-dark text-decoration-none mx-3" to="/episodes">Episodes</NavLink>
                    <NavLink activeClassName="active mx-3" className="text-dark text-decoration-none mx-3" to="/location">Location</NavLink>
                </div>
                
             
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar