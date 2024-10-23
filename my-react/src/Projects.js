import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Projects = () => { 
    const breadcrumbsPaths = [ 
        { title: 'Home', to: '/' }, 
        { title: 'Projects', to: '/projects' } 
    ]; 

    return ( 
        <section id="projects" className="container text-center"> 
            <Breadcrumbs paths={breadcrumbsPaths} /> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCode} className="mr-2" /> 
                Projects 
            </h2> 
            <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Weed Detection in Agriculture using Image Processing 
                            </h5> 
                            <p className="card-text"> 
                                Identifying and removing garbage can be a tedious task. I designed and trained a deep learning object detection model to detect unwanted litter plants using the RCNN algorithm, harvested and deployed with Django. 
                                <br /> 
                                Technology used: Django Framework. 
                                <br /> 
                                GitHub Link: <a href="https://github.com/Rahulmane9403/Weed-plant-detection-from-agricultural-field-images">GitHub</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 

                {/* Project 2 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                SMS Spam Detection Using LightGBM 
                            </h5> 
                            <p className="card-text"> 
                                Spam detection is critical for secure message and SMS communication. Accurately identifying spam is a significant challenge, and numerous researchers have proposed various detection approaches. Using Kaggle notebooks and datasets, we finally deployed our app on Streamlit. 
                                <br /> 
                                Technology used: Django Framework, Streamlit, Kaggle. 
                                <br /> 
                                GitHub Link: <a href="https://github.com/Rahulmane9403/sms-spam-detection">GitHub</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 

                {/* Project 3 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Fake News Detection using NLP 
                            </h5> 
                            <p className="card-text"> 
                                This is an NLP-based project that uses a classification model developed with a Passive Aggressive Classifier to determine whether the given news is fake or not. The project was generated using the TF-IDF vectorizer and the passive-aggressive classifier model, and was deployed in Django. Later, we deployed it on AWS. 
                                <br /> 
                                Technology used: Django Framework, AWS Cloud, NLP. 
                                <br /> 
                                GitHub Link: <a href="https://github.com/Rahulmane9403/fake-news-detection">GitHub</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 

                {/* Project 4 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Analyzing the E-commerce Sales 
                            </h5> 
                            <p className="card-text"> 
                                Leveraged Power BI to create interactive dashboards, optimizing sales strategies and enhancing overall performance in the e-commerce sector. 
                                <br /> 
                                Dashboard Link: <a href="https://www.linkedin.com/posts/rahul-mane-53b48b219_e-commerce-sales-dashboard-activity-7071924307311964160-7lSp/">Dashboard</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 

                {/* Project 5 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Analyzing the Global Superstore Data 
                            </h5> 
                            <p className="card-text"> 
                                Developed Power BI dashboards that improved decision-making and operational efficiency for the Global Superstore, resulting in enhanced profitability. 
                                <br /> 
                                Dashboard Link: <a href="https://www.linkedin.com/posts/rahul-mane-53b48b219_global-superstore-power-bi-dashboard-activity-7055238543916285952-aGyC/?utm_source=share&utm_medium=member_desktop">Dashboard</a>
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Projects;

