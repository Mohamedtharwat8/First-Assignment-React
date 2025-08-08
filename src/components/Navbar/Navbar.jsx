import React from 'react'
 import styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
<nav className={`navbar navbar-expand-lg p-4 navbar-dark ${styles['bg-navbar']}`}>
  <div className="container">
    <Link className="navbar-brand text-uppercase fs-2 fw-bold" to="home">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icpon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link   text-uppercase fw-bold fs-5" to="about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase fw-bold fs-5 mx-3" to="portfolio" >Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase fw-bold fs-5" to="contact" >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
