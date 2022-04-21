import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"

export default function Profile(){
    return (
        <div className='profile-container ' id="home">
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/ispahan.rahman' target="_blank">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/mahmud-ur-rahman-a3a1b8191/' target="_blank" >
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://github.com/IspahanRahman' target="_blank">
                                <i className='fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello, I'M <span className='highlighted-text'>Ispahan Rahman</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic Dev 🔴",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000, 
                                    "Mern Stack Dev 😎",
                                    1000,
                                     "React Dev 🖥️",
                                     1000
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Passionate of building applications with front and back end operations
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='CV of Md. Mahmud-Ur-Rahman.pdf' download='CV of Md. Mahmud-Ur-Rahman.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                        
                    </div>
                </div>
            </div>
            
        </div>
       
    )
}