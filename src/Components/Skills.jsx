import React from 'react'
import '../Styles/Skills.css'

const Skills = ({ data, isVisible }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`skills-page ${isVisible ? 'sscroll-up' : ''}`}>
      <h1>My Skills</h1><hr />
      <div className='container-skill'>
        <div className="skill-cards">
          {data.skills && data.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-details">
                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-percentage">{skill.percentage}%</p>
              </div>
              <img src={skill.image.url} alt="" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills