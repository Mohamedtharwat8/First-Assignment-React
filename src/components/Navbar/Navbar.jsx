import React from 'react'
 import styles from './Navbar.module.css'
export default function Navbar() {
  return (
  <div className={`navbar navbar-expand-lg ${styles['bg-navbar']}`} >
  <div className="container ">
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Start Framework </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">about</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">portfolio </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

  )
}
