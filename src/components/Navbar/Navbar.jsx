import React from 'react'

export default function Navbar() {
  return (
    <div className="w-100 bg-navbar">
      <div className="container ">
        <nav class=" navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Start Framework </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">about</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">portfolio </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">contact</a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
