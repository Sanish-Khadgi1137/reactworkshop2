// use "classNameName" in js unlike html and css if used "className" results error saying "invalid Dom property" so here we search and replace "classNameName" by "classNameName" using control + F
import React from 'react'
 
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'


const Navbar = () => {
  return (
      <div>
          {/* //"fixed-top" makes top(here navbar) fix while navigating through different components */}
          <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-dark">
              <div className="container-fluid">
                  
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#home">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#about">About</a>
                              {/* //here "href="#about" " is exaple of "states" conclice it takes to
                              that component/page with out refreshing the page; do not for get # and 
                              small letter in "section=id" of respective componenets */}
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#experience">Skills</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#portfolio">Projects</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                          </li>
                          
                          
                      </ul>
                      
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar