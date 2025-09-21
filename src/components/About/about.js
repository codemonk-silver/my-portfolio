import React from 'react';
import './about.css';
import profilepics from '../../asset/profilepics.png';

const About = () => {
  return (
    <section id="about" class="about-container">
        <div class="about-img">
            <img src={profilepics} alt='eniola' />
        </div>
        <div class="about-content">
            <span class="about-title">About Me</span>
            <div class="about-des">
                I am a web developer with experience in building responsive, user-friendly websites and web applications. I specialize in turning ideas into functional digital solutions by combining clean code, modern design, and strong problem-solving skills. Skilled in front-end development, I can create dynamic, efficient, and visually appealing websites that meet both business goals and user needs. I enjoy collaborating with clients and teams to deliver projects that are reliable, scalable, and easy to maintain.
            </div>
            <div class="about-tab">
                <p class="tablinks active-links">Skills</p>
            </div>
            <div class="tab-contents">
                <ul>
                    <li><button>HTML</button></li>
                    <li><button>CSS</button></li>
                    <li><button>JAVASCRIPT</button></li>
                    <li><button>REACT</button></li>
                    <li><button>TAILWIND.CSS</button></li>
                    <li><button>NEXT.JS</button></li>
                </ul>
            </div>
        </div>
    </section>

  )
}

export default About