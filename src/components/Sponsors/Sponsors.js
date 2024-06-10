import React, { useRef, useEffect } from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const carouselSlide = useRef(null);
  const carouselItems = useRef(null);
  const counter = useRef(0);

  useEffect(() => {
    const size = carouselItems.current[0].clientWidth;
    
    const handleNextClick = () => {
      if (counter.current >= carouselItems.current.length - 1) return;
      carouselSlide.current.style.transition = 'transform 0.5s ease-in-out';
      counter.current++;
      carouselSlide.current.style.transform = 'translateX(' + (-size * counter.current) + 'px)';
    };
    
    const handlePrevClick = () => {
      if (counter.current <= 0) return;
      carouselSlide.current.style.transition = 'transform 0.5s ease-in-out';
      counter.current--;
      carouselSlide.current.style.transform = 'translateX(' + (-size * counter.current) + 'px)';
    };

    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    
    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);
    
    return () => {
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className="container">
      <section id="sponsorship-partnership-jury">
        <h2>Sponsors, Partnership, and Jury</h2>
        <div className="carousel-container">
          <div className="carousel-slide" ref={carouselSlide}>
            <div className="carousel-item" ref={el => carouselItems.current = [...(carouselItems.current || []), el]}>
              <img src="sponsorship.jpg" alt="Sponsorship" />
              <h3>Sponsorship</h3>
              <p>Details about sponsorship opportunities.</p>
            </div>
            <div className="carousel-item" ref={el => carouselItems.current = [...(carouselItems.current || []), el]}>
              <img src="partnership.jpg" alt="Partnership" />
              <h3>Partnership</h3>
              <p>Details about partnership opportunities.</p>
            </div>
            <div className="carousel-item" ref={el => carouselItems.current = [...(carouselItems.current || []), el]}>
              <img src="jury.jpg" alt="Jury" />
              <h3>Jury</h3>
              <p>Details about jury opportunities.</p>
            </div>
          </div>
          <button className="carousel-prev">&#10094;</button>
          <button className="carousel-next">&#10095;</button>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
