import React, { useEffect, useRef, useState } from 'react';

function Path() {
  const circleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    handleResize();
    console.log(isMobile)

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop;
      let totalHeight;
      if(!isMobile){
        scrollTop =  window.scrollY - 1420;
        totalHeight = document.body.scrollHeight - 8700 ;
        // console.log(document.body.scrollHeight)
        // console.log(scrollTop)
      }else{
        scrollTop =  window.scrollY - 1500;
        totalHeight = document.body.scrollHeight - 8800;
      }
      const scrollFraction = (scrollTop / totalHeight) ;
      // console.log("friction", scrollFraction);

      const pathElement = document.getElementById('wire');
      const pathLength = pathElement.getTotalLength();
      const pointAtLength = pathElement.getPointAtLength(scrollFraction * pathLength);

      if (circleRef.current) {
        circleRef.current.setAttribute('cx', pointAtLength.x);
        circleRef.current.setAttribute('cy', pointAtLength.y);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="svg-container overflow-hidden">
      <svg fill="none" className="animated-svg realtive z-10" viewBox="-25 0 1243 1240" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path id="wire" d="M 492 61 L 1190 61 L 1190 309.5 L 1073 425.5 L 121 425.5 L 2 545 L 2 827 L 1073 827 L 1190 945 L 1190 1204.5 L 2 1204.5" stroke="white" strokeWidth="3" />
        <circle className='z-40' ref={circleRef} cx="492" cy="61" r="27" fill="url(#paint0_linear_5_18296" />
        <defs>
          <linearGradient id="paint0_linear_5_18296" x1="465.305" y1="68.5" x2="521.678" y2="68.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.255218" stop-color="#F0F600"/>
            <stop offset="0.8" stop-color="#00A8AA"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Path;
