import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

import "./Project.css"

const Project =()=>{
    return (
        <>
            <section className="teams" id="teams">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>
                    <div class="carousel-wrapper">
                    <Carousel  infiniteLoop useKeyboardArrows autoPlay>
                       
                       <div className="card">
                           <div className="box">
                           <img src="../ispahan.jpg" />
                           <div className="text">Someone name</div>
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                           </div>
                       </div>
                       <div className="card">
                           <div className="box">
                           <img src="../ispahan.jpg" />
                               <div className="text">Someone name</div>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                               </div>
                           </div>
                           <div className="card">
                               <div className="box">
                               <img src="../ispahan.jpg" />
                               <div className="text">Someone name</div>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                               </div>
                           </div>
                 
               </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project