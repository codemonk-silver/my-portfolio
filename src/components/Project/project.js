import React from 'react';
import './project.css';
import Screenshot1 from '../../asset/Screenshot1.png';
import Screenshot2 from '../../asset/Screenshot2.png';
import Screenshot3 from '../../asset/Screenshot3.png';

const Project = () => {
  return (
    <section id="projects" class="projects">
    <div class="container">
        <h2 class="feature-title">Featured Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <img src={Screenshot1} alt="E-commerce PWA" />
                </div>
                <div class="project-info">
                    <h3 class="project-title">Vacation Dashboard</h3>
                    <p class="project-description">A modern vacation discovery platform showcasing responsive design and user-centric travel planning features</p>
                    <div class="project-links">
                        <a href="#" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                            </svg>
                            Live Demo
                        </a>
                        <a href="#" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src={Screenshot2} alt="Dashboard Analytics" />
                </div>
                <div class="project-info">
                    <h3 class="project-title">Digital Marketing Dashboard</h3>
                    <p class="project-description">Interactive data visualization dashboard and responsive design for all device sizes.</p>
                    <div class="project-links">
                        <a href="#" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                            </svg>
                            Live Demo
                        </a>
                        <a href="#" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image">
                    <img src={Screenshot3} alt="Dashboard Analytics" />
                </div>
                <div class="project-info">
                    <h3 class="project-title">Laundry Dashboard</h3>
                    <p class="project-description">Our expertly designed landing page, crafted with clean HTML and responsive CSS, offers a glimpse into our commitment to exceptional laundry care.</p>
                    <div class="project-links">
                        <a href="#" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                            </svg>
                            Live Demo
                        </a>
                        <a href="#" class="project-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Project