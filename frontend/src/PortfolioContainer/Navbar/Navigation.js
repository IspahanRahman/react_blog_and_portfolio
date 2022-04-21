import React from "react"
import {NavLink} from "react-router-dom"
import {Nav,Navbar,NavDropdown} from "react-bootstrap"
import './Navbar.css'
export default function Navigation(){
    return (
        <>
            <div class="navbar">
             <div class="max-width">
            <ul class="menu">
               
                <li><a><NavLink exact  className="menu-btn" to='/'>Home</NavLink></a></li>
                <li><a><NavLink exact  className="menu-btn" to='/about'>About</NavLink></a></li>
                <li><a><NavLink exact  className="menu-btn" to='/blog'>Blog</NavLink></a></li>
                <li><a><NavLink exact  className="menu-btn" to='/services'>Services</NavLink></a></li>
                <li><a><NavLink exact  className="menu-btn" to='/skills'>Skills</NavLink></a></li>
                <li><a><NavLink exact  className="menu-btn" to='/projects'>Projects</NavLink></a></li>
                <li><a><NavLink exact  className="menu-btn" to='/contact'>Contact</NavLink></a></li>
                
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
            </div>
        </div>
        </>
    )
}