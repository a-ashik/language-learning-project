import React from 'react';
import AboutImg from '../../assets/about.jpg'
import { Zoom } from "react-awesome-reveal";


const About = () => {
    return (
        <div className='container mt-5'> 
            <h1 className="text-center">WHO AM I?</h1>
        <div className='row my-5'>
        <div className='col-md-4 mt-5'>
        <Zoom>
            <h4 className='mb-3'>We Privide Our Best Service To Improve Your Language skills</h4>
            <p>Language acquisition is the process by which humans acquire the capacity to perceive and comprehend language, as well as to produce and use words and sentences to communicate. Language acquisition involves structures, rules, and representation.</p>
        </Zoom>

        </div>
        <div className='col-md-8 ms-5' style={{width:'700px',height:'400px'}}>      
          <Zoom>
            <img className='w-100 h-100 ms-5' src={AboutImg} alt="" />
            </Zoom>
        </div>

        </div>
        </div>
    );
};

export default About;