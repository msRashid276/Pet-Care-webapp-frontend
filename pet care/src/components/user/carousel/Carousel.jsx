import React, { useEffect, useRef } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import pet1 from '../../../assets/user/home/pet1.jpg';
import pet2 from '../../../assets/user/home/pet2.jpg';
import pet3 from '../../../assets/user/home/pet3.jpg';
import pet4 from '../../../assets/user/home/pet4.jpg';
import pet5 from '../../../assets/user/home/pet5.jpg';
import pet6 from '../../../assets/user/home/pet6.jpg';
import './Carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 3000;

  let runNextAuto;
  let runTimeOut;

  useEffect(() => {
    // Start auto transition
    runNextAuto = setTimeout(() => {
      handleSliderChange('next');
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = 'none';
      runningTimeRef.current.offsetHeight; // Trigger reflow
      runningTimeRef.current.style.animation = null;
      runningTimeRef.current.style.animation = 'runningTime 3s linear 1 forwards';
    }
  };

  const handleSliderChange = (type) => {
    const sliderItemsDom = listRef.current.querySelectorAll('.item');
    
    if (type === 'next') {
      listRef.current.appendChild(sliderItemsDom[0]);
      carouselRef.current.classList.add('next');
    } else {
      listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      handleSliderChange('next');
    }, timeAutoNext);

    resetTimeAnimation(); // Reset the running time animation
  };

  return (
    <div className='carousel h-screen w-full relative overflow-hidden' ref={carouselRef}>
      <div className='list' ref={listRef}>
        <div className='item' style={{ backgroundImage: `url(${pet1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="content">
            <div className="title">Australian Terrier</div>
            <div className="name">Sieor</div>
            <div className="des">Australian Terriers are energetic, adaptable, and loving, small-sized balls of fun. They love to please their owners and make great family pets.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: `url(${pet2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="content">
            <div className="title">American Bobtail</div>
            <div className="name">Summer</div>
            <div className="des">Stubby tail and muscular build, the American Bobtail has a broad head, large expressive eyes, and a medium-length, shaggy coat in various colors and patterns.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: `url(${pet3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="content">
            <div className="title">American Shorthair</div>
            <div className="name">Catter</div>
            <div className="des">Muscular build, round face, and a short, dense coat available in various colors and patterns.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: `url(${pet4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="content">
            <div className="title">Chow Chow</div>
            <div className="name">Simen</div>
            <div className="des">Chow Chows are distinctive-looking, medium-to-large-sized, sturdy dogs with a teddy bear-like appearance. They are loyal to their owner and suited to a single-person or small household.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: `url(${pet5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="content">
            <div className="title">Alaskan Husky</div>
            <div className="name">Husker</div>
            <div className="des">Suited for hands-on, energetic owners, the Alaskan Husky has high exercise needs and is an excellent companion for active lifestyles.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: `url(${pet6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="content">
            <div className="title">English Pointer</div>
            <div className="name">Stokes</div>
            <div className="des">The English Pointer is a large breed of dog originally bred as a gun dog, dating back over 3 centuries in England.</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Next/Prev Buttons */}
      <div className="arrows">
        <button className="prev" onClick={() => handleSliderChange('prev')}><GrPrevious size={24} /></button>
        <button className="next" onClick={() => handleSliderChange('next')}><GrNext size={24} /></button>
      </div>

      {/* Time Running */}
      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default Carousel;
