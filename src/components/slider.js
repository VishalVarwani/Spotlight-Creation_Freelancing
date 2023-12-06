// Slider.js
import React, { useEffect, useState, useRef } from 'react';
import imagesLoaded from 'imagesloaded';
import Arrow from './Demo';

const Slider = () => {
  const durations = {
    auto: 5000,
    slide: 1400
  };

  const [length, setLength] = useState(0);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [working, setWorking] = useState(false);

  const wrapperRef = useRef();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const projects = wrapper ? wrapper.querySelectorAll('.project') : [];
    const arrow = wrapper ? wrapper.querySelector('.arrow') : null;

    if (!wrapper || !projects.length || !arrow) {
      console.error('Slider elements not found.');
      return;
    }

    const init = () => {
      projects.forEach((project, index) => {
        project.style.zIndex = 10;
      });

      const currentProject = projects[current];
      const nextProject = projects[current + 1];
      currentProject.style.zIndex = 30;
      if (nextProject) {
        nextProject.style.zIndex = 20;
      }
    };

    const clear = () => {
      arrow.removeEventListener('click', handleArrowClick);
      if (isAuto) {
        clearInterval(autoInterval);
      }
    };

    const handleArrowClick = () => {
      if (working) return;
      processBtn();
    };

    const processBtn = () => {
      if (isAuto) {
        setIsAuto(false);
        clearInterval(autoInterval);
      }

      if (arrow.classList.contains('next')) {
        updateNext();
      }

      if (arrow.classList.contains('previous')) {
        updatePrevious();
      }
    };

    const updateNext = () => {
      setNext((current + 1) % length);
      process();
    };

    const updatePrevious = () => {
      setNext(next - 1 < 0 ? length - 1 : next - 1);
      process();
    };

    const process = () => {
      setWorking(true);
      const nextProject = projects[next];
      if (!nextProject) return;

      nextProject.style.zIndex = 20;
      projects[current].classList.add('hide');

      setTimeout(() => {
        projects[current].style.zIndex = 10;
        nextProject.style.zIndex = 30;
        projects[current].classList.remove('hide');
        setCurrent(next);
        setWorking(false);
      }, durations.slide);
    };

    // Initialization
    init();
    setLength(projects.length);
    arrow.addEventListener('click', handleArrowClick);

    // Auto play
    const autoInterval = setInterval(() => {
      setNext((current + 1) % length);
      process();
    }, durations.auto);

    return () => {
      clear();
    };
  }, [current, length, next, working, isAuto, wrapperRef]);

  return (
    <div className="page-view" ref={wrapperRef}>
      {Array.from({ length }, (_, index) => (
        <div key={index} className="project">
          {/* Your project content */}
          <div className="text">
            <h1>{`Project ${index + 1}`}</h1>
            <p>{`Description for Project ${index + 1}`}</p>
          </div>
        </div>
      ))}
      <nav className="arrows">
        <Arrow direction="previous" />
        <Arrow direction="next" />
      </nav>
    </div>
  );
};

export default Slider;
