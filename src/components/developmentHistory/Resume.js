import React from 'react'
import Lists from './Lists'

function Resume() {
    const obj = [
        {
            year: "2021 - 2024",
            heading: "BACHELOR OF COMPUTER APPLICATION",
            subheading: "KANPUR UNIVERSITY, KANPUR",
            description: "CURRENT CGPA: 7.72"
        },
        {
            year: "2018 - 2020",
            heading: "SENIOR SECONDARY EDUCATION",
            subheading: "SSM SENIOR SECONDARY SCHOOL, GORAKHPUR",
            description: "PERCENTAGE: 87.2%"
        },
        {
            year: "2016 - 2018",
            heading: "SECONDARY EDUCATION",
            subheading: "DON BOSCO SENIOR SECONDARY SCHOOL, GORAKHPUR",
            description:"PERCENTAGE: 74.2%"
        },
    ]
  return (
    <section className='intro'>
      <div className="container">
        <h2>Education</h2>
        <Lists obj={obj}/>
      </div>
    </section>
  )
}

export default Resume
