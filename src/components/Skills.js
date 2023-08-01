import React from 'react'

function Skills() {
    const skillsData = [
        {
            skill: "HTML/CSS/SCSS",
            proficiency: "80",
        },
        {
            skill: "JAVASCRIPT",
            proficiency: "80",
        },
        {
            skill: "BOOTSTRAP",
            proficiency: "60",
        },
        {
            skill: "REACT JS",
            proficiency: "90",
        },
       
        {
            skill: "NODE JS",
            proficiency: "60",
        },
       
        {
            skill: "EXPRESS JS",
            proficiency: "50",
        },
        {
            skill: "MongoDB",
            proficiency: "70",
        },
        {
            skill: "SQL",
            proficiency: "90",
        },
        {
            skill: "C++",
            proficiency: "80",
        },
        {
            skill: "DSA",
            proficiency: "80",
        },
    ]
  return (
    <section className='skills'>
      <div className="container">
        <h2>Skills</h2>
        <ul>
            {skillsData.map((skill,ind) => (
                <li key={ind}>
                    <p>{skill.skill}</p>
                    <div className="progress-bar">
                        <div className='progress' style={{width: skill.proficiency+"%"}}></div>
                    </div>
                    <p className='percentage'>{skill.proficiency}%</p>
                </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
