import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const images = [
        "/Assets/Slider/slider-1.jpg",
        "/Assets/Slider/slider-2.jpg",
        "/Assets/Slider/slider-4.jpg",
        "/Assets/Slider/slider-5.jpg",
        "/Assets/Slider/slider-6.jpg",
        "/Assets/Slider/slider-1.jpg",
 
    ];

    return (
       <>
        <Slide duration={2000} transitionDuration={2000} infinite={true} indicators={true} arrows={true} autoplay={2000}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Well Come To MPS School <br/></span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
           
        </Slide>

       </>



    );
};

export default Example;