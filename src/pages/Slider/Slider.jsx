import React from 'react';
import img1 from '../../assets/slide1.png'
import img4 from '../../assets/slide4.png'
import img3 from '../../assets/slide3.jpg'
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div className=''>
        <Carousel className='sliderHeight'>
                <Carousel.Item className='sliderHeight'>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    {/* <h3>First slide car</h3>
                    <p>A model car, or toy car, is a miniature representation of an automobile</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='sliderHeight'>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item className='sliderHeight'>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Slider;