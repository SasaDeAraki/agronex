import React, { useState } from 'react';
import './Carrossel.css';
import Arrow1 from '../../assets/Arrow 1.png';
import Arrow2 from '../../assets/Arrow 2.png';

const Carrossel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { type: 'youtube', videoId: 'bhQMzNqnfhE' },
        { type: 'youtube', videoId: 'PbAQgXlqrJo'}
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className='gira-gira'>
            <div className='gira-gira-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className={`gira-gira-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        {slide.type === 'image' ? (
                            <img src={slide.src} alt={`Slide ${index}`} />
                        ) : slide.type === 'youtube' ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${slide.videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`YouTube video ${index}`}
                            />
                        ) : null}
                    </div>
                ))}
            </div>
            <button className='gira-gira-button prev' onClick={prevSlide}>
                <img src={Arrow2} alt="Previous" />
            </button>
            <button className='gira-gira-button next' onClick={nextSlide}>
                <img src={Arrow1} alt="Next" />
            </button>
        </div>
    );
};

export default Carrossel;
