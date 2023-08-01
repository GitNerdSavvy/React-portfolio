import React from 'react'
import myImg from "../Images/san.jpeg"
import {AiFillGithub,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
function Banner() {
  return (
    <header>
        <img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=759&q=80" alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <img src={myImg} alt="profile" />
                <div className="personal-info">
                    <h1>Sanjeev  Yadav</h1>
                    <p>Full Stack developer</p>
                    <div className="bio">
                        <div className="row">
                            <div className="info">Age</div>
                            <div className="detail">20Yrs</div>
                            <div className="info">Phone</div>
                            <div className="detail">+91 8400760557</div>
                            <div className="info">Email</div>
                            <div className="detail">sanjeev8400yadav@gmail.com</div>
                            <div className="info">Address</div>
                            <div className="detail">Gorakhpur, Uttar Pradesh India</div>
                        </div>
                    </div>
                    
                    <div className="social">
                    <div className="links">
                    <a href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit">
                            <AiFillLinkedin />
                        </a>
                        </div>
                        <div className="links">
                        <a href="https://github.com/GitNerdSavvy">
                           
                                <AiFillGithub />
                            </a>
                        </div>
                        <div className="links">
                        <a href="https://instagram.com/sanjeev___yadav_?igshid=NGExMmI2YTkyZg==">
                            <AiFillInstagram />
                        </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Banner
