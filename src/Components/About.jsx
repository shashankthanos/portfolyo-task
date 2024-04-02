import React, { useState } from 'react'
import "../Styles/About.css"
import { Link, useNavigate } from 'react-router-dom'

const About = ({ data, isVisible }) => {

    const [isSliding, setIsSliding] = useState(true);

    const navigate = useNavigate();

    const toggleSlide = () => {
        setIsSliding(!isSliding);
    };
    
    if (!data) return <div>Loading......</div>

    return (
        <div className={`about ${isVisible ? 'scroll-up' : ''}`}>
            {data.about && data.about.avatar && (
                <>
                    <div className="title">
                        <div><img className='img' src={data.about.avatar.url} alt="" /></div>
                        <div className='information'>
                            <h2>{data.about.title}</h2>
                            <h1>{data.about.name}</h1>
                            <p>{data.about.description}</p><br /><br />
                            <p>{data.about.subTitle}</p><br />
                            <Link to="/contact" className='contact-btn'>Contact</Link><br />
                            <p style={{ fontFamily: "monospace", fontSize: "40px", color: "#ff714a" }}>{data.about.quote}</p>
                        </div>
                    </div>
                    <div className="services">
                        <span>What I Do</span>
                        <div className="developments">
                            {data.services.map((service,index) => (
                                <div className='service' key={index}>
                                    <div className='divimage'><img height={150} className='service_image' src={service.image.url} alt="" /></div>
                                    <h1>{service.name}</h1><br />
                                    <p>{service.desc}</p><br />
                                    <h3>{service.charge}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="testimonials">
                        <span>Testimonials</span>
                        <div className="testimonial-slider" style={{ animationPlayState: isSliding ? 'running' : 'paused' }}>
                            {data.testimonials.map((testimonial, index) => (
                                <div className="card" key={index}>
                                    <img height={150} src={testimonial.image.url} alt="" />
                                    <p>{testimonial.review}</p>
                                    <h4>{testimonial.name}</h4>
                                    <h5>{testimonial.position}</h5>
                                </div>
                            ))}
                        </div>
                        <button className='stopbtn' onClick={toggleSlide}>{isSliding ? 'Stop Slide' : 'Start Slide'}</button>
                    </div>
                    <div className="socialmedia">
                        {data.social_handles.map((social,index) => (
                            <div className='social' key={index}>
                                <div onClick={() => { console.log('Navigating to:', `/${social.url}`); navigate(`/${social.url}`); }} className='social_image'>
                                    <img className='imgsocial' height={70} src={social.image.url} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default About