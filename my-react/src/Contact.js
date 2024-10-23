// Contact.js 
import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Contact = () => { 
    const breadcrumbsPaths = [ 
        { title: 'Home', to: '/' }, 
        { title: 'Contact', to: '/contact' } 
    ]; 

    return ( 
        <section id="contact" className="container"> 
            <Breadcrumbs paths={breadcrumbsPaths} /> 
            <h2 className="section-title">Contact</h2> 
            <p className="section-description"> 
                Feel free to reach out for collaboration or inquiries. 
            </p> 
            <ul className="contact-list list-unstyled"> 
                <li> 
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> 
                    <a href="mailto:rahulmane9403@gmail.com">rahulmane9403@gmail.com</a>
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon" /> 
                    <a href="https://www.linkedin.com/in/rahul-mane-53b48b219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faGithub} className="contact-icon" /> 
                    <a href="https://github.com/Rahulmane9403" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" /> 
                    <span style={{ fontSize: '16px', marginLeft: '8px' }}>7875*****8</span>
                </li> 
            </ul> 
        </section> 
    ); 
}; 

export default Contact;
