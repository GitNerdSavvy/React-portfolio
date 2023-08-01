import React from 'react'
import saurabh from "../Images/saurabh.png" 
import satyam from "../Images/satyam.png" 
// import abahay from "../Images/abhay.png" 
function Testimonial() {
  return (
    <section>
        <div className="testimonial-wrapper">
            <div className="container">
                <div className="testimonial">
                    <div className="text-wrapper">
                        <div className="subtitle">Endorsements</div>
                        <h2>
                            <span>What</span>
                            <span>People</span>
                            Says.
                        </h2>
                    </div>
                    <div className="testimonial-cards">
                        <div className="card">
                            <div className="content">
                                <img src={saurabh} alt="" />
                                <div className='name-and-des'>
                                    <h4>Saurabh Agnihotri</h4>
                                    <p>College Friend </p>  
                                </div>
                                <p>  A mastermind of Innovation and Efficiency, It is a great pleasure
                      that I endorse him as a developer of amazing
                      expertise. He exhibits dedication to solving problems and expanding skills.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <img src={satyam} alt="" />
                                <div className='name-and-des'>
                                    <h4>Satayam Chauhan</h4>
                                    <p>College Friend </p>
                                </div>
                                <p> His ability to navigate complex coding challenges and
                      deliver elegant solutions is amazing. He possesses a
                      natural inclination for pushing the boundaries of
                      technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Testimonial
