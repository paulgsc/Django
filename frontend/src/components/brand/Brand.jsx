import React from 'react';
import './brand.css';
import brandVideo from '../../assets/houses.mp4';

function Brand() {
  return (
    <div className='brand__section'>
        <div className='brand__section-video'>
            <video autoPlay loop muted className='brand-video'>
                <source src={brandVideo} type='video/mp4' /> 
            </video>
        </div>
        <div className='brand__section-title'>
            <div className='brand__section-content'>
                <div className='section_title'>
                    <h1><div><span className='animated-text'>Some Title Here</span></div></h1>
                    <p className='brand-description'><span>Some Description here!</span></p>
                    <div className='brand-social_media'>
                        <div className='social_media__buttons'>
                            <button>Browse 1</button>
                            <button>some app!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand
