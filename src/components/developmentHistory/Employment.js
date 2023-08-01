import React from 'react'
import Lists from './Lists'

function Employment() {
    const obj = [
        {
            year: "June 2023 - July 2023",
            heading: "Walmart Global",
            subheading: "Data Munging",
            description: "This internship has provided me experience in utilising Microsoft Excel for data analysis and reporting."
        },
        
        
      {
        year: "April 2022 - June 2022",
        heading: "MEWS Instagram",
        subheading: "Content Creator",
        description: "I used to create content based on the facts."
    },
    ]
  return (
    <section className='intro'>
      <div className="container">
        <h2>Experience</h2>
        <Lists obj={obj}/>
      </div>
    </section>
  )
}

export default Employment
