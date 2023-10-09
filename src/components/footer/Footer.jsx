import React from 'react'

import './footer.css'
// use smalle letter after "react-icons/" eg "..cons/fa"
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
      <div>

          <footer>
              <ul className='permalinks'>

                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#project">Project</a></li>
                  <li><a href="#contact">Contact</a></li>

              </ul>

              <div className="footer__socials">
                  <a href="https://www.linkedin.com/" target="_blank"><FaLinkedinIn /></a>
                  <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                  <a href="https://www.instagram.com/" target='_blank'><FiInstagram /></a>
                  <a href="https://twitter.com/" target='_blank'><IoLogoTwitter /></a>
              </div>

              <div className="footer__copyright">
                  <small>Copyright &copy; REACT LEARNER 2023 | All rights reserved</small>
              </div>

          </footer>
    </div>
  )
}

export default Footer