import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            mollitia perspiciatis cumque iusto neque numquam eius quidem
            doloribus, harum dignissimos rerum consequatur cum error! Iste sequi
            quod nisi neque doloremque?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" />
        </div>
      </div>
    </section>
  )
}

export default Hero
