import React, { useState } from 'react';
import './Carrossel.css';
import holder4 from '../../assets/holder4.png'
import holder5 from '../../assets/holder5.png'
import Arrow1 from '../../assets/Arrow 1.png'
import Arrow2 from '../../assets/Arrow 2.png'

const Carrossel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        holder4,
        holder5
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className='gira-gira'>
            <div className='gira-gira-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div className={`gira-gira-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img src={src} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className='gira-gira-button prev' onClick={prevSlide}>
                <img src={Arrow2}></img>
            </button>
            <button className='gira-gira-button next' onClick={nextSlide}>
                <img src={Arrow1}></img>
            </button>
        </div>
    );
};

export default Carrossel;
