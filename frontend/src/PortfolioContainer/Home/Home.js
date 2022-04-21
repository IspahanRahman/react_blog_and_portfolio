import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import About from '../AboutMe/About'
import Services from '../Services/Services'
import Skill from '../Skills/Skill'
import Project from '../Projects/Project'
import ContactMe from '../ContactMe/ContactMe'
import "./Home.css"

export default function Home(){
    return (
        <div className='home-container'>
            <Profile/>
            <About/>
            <Services/>
            <Skill/>
            <Project/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}