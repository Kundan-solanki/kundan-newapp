import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogoBuffer } from "react-icons/io5"; // react-icon
export default function Navbar() {

  let auth = localStorage.getItem('token')
  const navegater = useNavigate()


  function logoutuserperson() {
    localStorage.clear()
    document.querySelector('#logoutin').style.color = 'green'
    navegater('/login')

  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="#">{<IoLogoBuffer />}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {
              !auth ?
                <ul className="navbar-nav">
                  <li>
                    <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                    <Link className="navbar-brand fs-3 font-8" to="/login">Login</Link>
                  </li>

                </ul>

                :


                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                  </li>
                  <div className="dropdown ">
                    <a className="btn  dropdown-toggle fs-5" to="#" data-bs-toggle="dropdown" >
                      Roles
                    </a>

                    <ul className="dropdown-menu" >
                      <li><Link className="dropdown-item" to="/role">Listing</Link></li>
                      <li><Link className="dropdown-item" to="/addrole">Insert </Link></li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <a className="btn  dropdown-toggle fs-5" to="#" data-bs-toggle="dropdown" >
                      Student
                    </a>

                    <ul className="dropdown-menu" >
                      <li><Link className="dropdown-item" to="/student">Listing</Link></li>
                      <li><Link className="dropdown-item" to="/addstudent">Insert </Link></li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <a className="btn  dropdown-toggle fs-5" to="#" data-bs-toggle="dropdown" >
                      Marksheet
                    </a>

                    <ul className="dropdown-menu" >
                      <li><Link className="dropdown-item" to="/marksheet">Listing</Link></li>
                      <li><Link className="dropdown-item" to="/addmarksheet">Insert </Link></li>

                    </ul>
                  </div>

                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                      <Link id='logoutin' className="nav-link active fs-5 text-success" aria-current="page" to="/login" onClick={() => logoutuserperson()}>Logout ({JSON.parse(auth)?.name})</Link>
                    </li>
                  </ul>
                </ul>

            }
          </div>
        </div>
      </nav>
    </div>
  )
}
