import React from 'react';
import './experience.css';

const Experience = () => {
  return (
     <section id="experience" class="experience">
    <div class="container">
        <h2 class="experience-title">My Experience</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">June 2024 - Present</div>
                <div class="timeline-content">
                    <h3 class="timeline-title">Front-End Developer</h3>
                    <div class="timeline-subtitle">Freelance, Magboro, Ogun State</div>
                    <p>I develop performant, responsive web applications serving enterprise clients using React.js and TypeScript. My work involves implementing comprehensive testing strategies, optimizing application performance, and building accessible UIs compliant with WCAG standards.</p>
                    <p>I've successfully reduced initial load times, established modular component architecture, and contributed to open-source projects and internal libraries.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">May 2023 - June 2024</div>
                <div class="timeline-content">
                    <h3 class="timeline-title">Junior Front-End Developer</h3>
                    <div class="timeline-subtitle">Uniontech Inc., Osogbo, Osun</div>
                    <p>As a Junior Front-End Developer at Uniontech, I developed responsive interfaces using React.js and Next.js for SaaS products with 30,000+ active users. I implemented state management solutions, collaborated with UI/UX designers, and optimized front-end performance.</p>
                    <p>I actively participated in code reviews and pair programming sessions while documenting component APIs to facilitate team knowledge sharing.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">January 2020 -  February 2023</div>
                <div class="timeline-content">
                    <h3 class="timeline-title">Bachelor of Science in Computer Science</h3>
                    <div class="timeline-subtitle">Federal Polytechnic Ede, Osun State</div>
                    <p>During my studies at the Federal Polytechnic Ede, I specialized in Human-Computer Interaction and developed a strong foundation in web development, user interface engineering, data structures, and cloud computing.</p>
                    <p>For my capstone project, I built a real-time collaborative coding environment using WebSockets that allowed multiple users to code simultaneously.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Experience