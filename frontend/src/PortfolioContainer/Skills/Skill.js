import React from 'react'
import './Skill.css'
const Skill=()=>{
    return (
        <>
            <section className='skills' id='skills'>
                <div className='max-width'>
                    <h2 className='title'>My Skills</h2>
                    <div className='skills-content'>
                        <div className='column left'>
                            <div class="text">My creative skills & experiences</div>
                            <p>I am experienced with Java and work Android development for 2 years.Recently working with Flutter for cross Platform.I have aslo backend skill.Javascript and Nodejs is my backend tool.  </p>
                            <a href="#">Read more</a>
                        </div>
                        <div className='column right'>
                            <div className='bars'>
                                <div className='info'>
                                    <span>HTML</span>
                                    <span>75%</span>
                                </div>
                                <div className='line html'></div>
                            </div>
                            <div class="bars">
                    <div class="info">
                        <span>CSS</span>
                        <span>60%</span>
                    </div>
                    <div class="line css"></div>    
                </div>
                <div class="bars">
                    <div class="info">
                        <span>JavaScript</span>
                        <span>75%</span>
                    </div>  
                    <div class="line js"></div>  
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Java</span>
                        <span>80%</span>
                    </div> 
                    <div class="line php"></div>   
                </div>
                <div class="bars">
                    <div class="info">
                        <span>MySQL</span>
                        <span>70%</span>
                    </div> 
                    <div class="line mysql"></div>   
                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill