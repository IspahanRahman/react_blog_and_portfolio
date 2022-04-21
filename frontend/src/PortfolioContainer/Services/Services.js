import React from 'react'
import './Services.css'
const Services=()=>{
    return (
        <>
            <section className='services' id='services'>
                <div className='max-width'>
                    <h2 className='title'>My Services</h2>
                    <div className='serv-content'>
                        <div className='card'>
                            <div className='box'>
                                <i className='fa fa-desktop'></i>
                                <div className='text'>Backend Development</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laborum!</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='box'>
                                <i className='fa fa-code'></i>
                                <div className='text'>Web Application</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, laborum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services