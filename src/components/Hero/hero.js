import React from 'react';
import './hero.css';
import heropics from '../../asset/heropics.jpg';

const Hero = () => {
  return (
    <section id="hero" class="hero-container">
        <div class="hero-content">
            <p class="p1">Hi, I'm</p>
                <h1>Eniola Olajugbagbe</h1>
                    <p class="p2">Frontend Developer</p>
                        <span class="hero-des">Committed to writing clean, maintainable code that meets business objectives while prioritizing web performance and accessibility standards</span>
                            <div class="hero-btn">
                                <button class="btn1">Download CV</button>
                                <button class="btn2">Hire Me</button>
                            </div>
        </div>
        <div class="hero-img">
            <img src={heropics} alt='' />
        </div>
    </section>
  )
}

export default Hero