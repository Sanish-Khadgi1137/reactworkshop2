import React from 'react'

import './portfolio.css'

import img from '../../assets/quiz.jpg'
import img2 from '../../assets/coming.jpg'


const Portfolio = () => {
  return (
      <div>

          <section id='project'>
              {/* // on click on project in navbar and footer it takes to setion=id */}
              <h5>My Recent Work</h5>
              <h2>Creativity</h2>
              <div className="container portfolio__container">

                  <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                          <img src={img} alt="" />
                      </div>
                      <h3>ASP.NET</h3>
                      <div className="portfolio__item-cta">
                          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                          <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                  </article>

                  <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                          <img src={img} alt="" />
                      </div>
                      <h3>ASP.NET</h3>
                      <div className="portfolio__item-cta">
                          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                          <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                  </article>

                  <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                          <img src={ img} alt="" />
                      </div>
                      <h3>ASP.NET</h3>
                      <div className="portfolio__item-cta">
                          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                          <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                  </article>

                  <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                          <img src={img} alt="" />
                      </div>
                      <h3>ASP.NET</h3>
                      <div className="portfolio__item-cta">
                          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                          <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                  </article>

                  <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                          <img src={img} alt="" />
                      </div>
                      <h3>ASP.NET</h3>
                      <div className="portfolio__item-cta">
                          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                          <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                  </article>

                  <article className='portfolio__item'>
                      <div className="portfolio__item-image">
                          <img src={img2} alt="" />
                      </div>
                      <h3>ASP.NET</h3>
                      <div className="portfolio__item-cta">
                          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
                          <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
                      </div>
                  </article>

              </div>
          </section>
    </div>
  )
}

export default Portfolio