import React from 'react'
import SkillData from '../Data/SkillData';
function Skill() {
  return (
    <section className="skills" id="skills">
      <div className="heading">
        <h2>Skills</h2>
        <span>Technical Skills</span>
      </div>
      <div className="skill-section">
        <div className="container">
          {SkillData.map((skill, index) => (
            <div className="skill-box" key={index}>
              <div className="skill-title">
                <div className="img">
                {skill.img}
                </div>
                <h3>{skill.Title}</h3>
              </div>
              <p className='desc'>{skill.Description}</p>
              <a href={skill.link} target='_blank'><button  className='Learn-more'>Learn More</button></a>
            </div>
          ))}

        </div>
      </div>
    </section >
  )
}

export default Skill