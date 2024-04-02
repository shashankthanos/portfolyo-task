import '../Styles/Resume.css'
import React from 'react'

const Resume = ({ data, isVisible }) => {
  if (!data) return <div>Loading......</div>

  return (
    <div className={`resume ${isVisible ? 'scroll-up' : ''}`}>
      <h1>Resume</h1><hr />
      <p>5 years of experience</p>
      <div className="expskills">
        <div className='experience'>
          <span>Experience</span>
          <div>
            {data.timeline && data.timeline.map((company,index) => {
              const startDate = new Date(company.startDate);
              const endDate = new Date(company.endDate);
              const options = { month: 'long', year: 'numeric' };
              const formattedStartDate = startDate.toLocaleString('default', options);
              const formattedEndDate = company.endDate ? endDate.toLocaleString('default', options) : 'Present';
              return (
                <div key={index} className="company">
                  <div key={company.id} className='date'>
                    <h4>{formattedStartDate}&nbsp; - &nbsp;{formattedEndDate}</h4>
                    <h5>{company.company_name}</h5>
                  </div>
                  <div className="pin"><div></div></div>
                  <div className='title1'>
                    <dl>
                      <dt>{company.jobTitle}</dt>
                      {company.bulletPoints.map((points,index) => <dd key={index}>{points}</dd>)}
                    </dl>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills">
          <span>Coding Skills</span>
          <div className='skill'>
            {data.skills && data.skills.map((skill,index) => (
              <React.Fragment key={index}>
                <div className='side'key={index}>
                  <h4>{skill.name}</h4>
                  <h6>{skill.percentage}%</h6>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={skill.percentage}
                  readOnly
                  className='custom-range'
                  style={{
                    background: `linear-gradient(to right, #ff714a ${skill.percentage}%, #282828 ${skill.percentage}%)`,
                  }}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <button className='btn'>Download CV</button>
    </div>
  )
}

export default Resume