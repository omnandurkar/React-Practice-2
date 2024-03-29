import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to = "/contact">Counter</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item"  to="/form">Form</Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to = "/login">Login</Link>
                  </li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/map">Map</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      



    </>

  )
}
