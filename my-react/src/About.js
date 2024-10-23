//About.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faUser } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 
import userImage from './images/user.png';


const About = () => { 
    return ( 
        <section id="about"
            className="container text-center"> 
            <div className="row"> 
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faUser} 
                            className="mr-2" /> 
                        About Me 
                    </h2> 
                    <div className="profile-image-container"> 

                        <img src={userImage}
                            alt="user pic"
                            className="img-fluid rounded-circle profile-image" /> 
                    </div> 

                    <p className="section-description mt-4">
                        I am a recent graduate with a Bachelor of Engineering in Computer Engineering from A.P. Shah Institute of Technology, Thane. I am confident in my ability to contribute to the team and positively impact the organization.
                    </p>
                    <p className="section-description">
                        With experience in virtual internships, I am well-versed in programming languages like Python, particularly in the context of Data Science. I have mastered Business Analytics tools such as Power BI and Excel. Additionally, I possess knowledge of AWS Cloud Services and SQL, along with business analysis techniques like data flow diagrams and flowcharts.
                    </p>
                    <p className="section-description">
                        I have completed various certifications in AWS, Machine Learning, Artificial Intelligence, Deep Learning, and Linux Automation.
                    </p>
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default About;
