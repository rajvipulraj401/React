import React, { useState, useEffect, useRef } from 'react';
import Button2 from "../Button/Button2";
import thetopcontroller from '../../assets/Images/thetopcontroller-black.png.png';
import Quadbtechnew from '../../assets/Images/Quadbtechnew.png.png';
import hmytes from '../../assets/Images/hmytes.png.png';
import Edusquarenew from '../../assets/Images/Edusquarenew.png.png';

const PremiumPartners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const iconsSectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (iconsSectionRef.current) {
      observer.observe(iconsSectionRef.current);
    }

    return () => {
      if (iconsSectionRef.current) {
        observer.unobserve(iconsSectionRef.current);
      }
    };
  }, []);

  const textGradient = {
    backgroundImage: "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="container mx-auto relative mt-24" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative text-white flex flex-col items-center pb-32">
        <h3 className="font-normal text-[22px] leading-[30.8px] text-center">
          Our{" "}
          <span style={textGradient}>
            Premium Partners
          </span>
        </h3>

        <div className="relative border-t border-white w-[85%] sm:w-[65%] mt-4 mx-auto">
          <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
          <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
        </div>

        <h1 className="leading-[36px] sm:leading-[44px]  md:leading-[50.2px] text-[32px] sm:text-[40px] md:text-[44px] font-bold mt-10 text-center">
          Some of our clients we've delivered projects for successfully
        </h1>
        <div ref={iconsSectionRef} className="flex gap-8 xxs:gap-12 sm:gap-16 md:gap-24  lg:gap-32 mt-12 justify-center items-center">
          <img src={Edusquarenew} alt="Edusquare" className={`h-[60px] sm:h-full transition-all duration-[2s] ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-180'}`} />

          <img src={thetopcontroller} alt="The Top Controller" className={` h-[60px] sm:h-full transition-all duration-[2s] ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-180'}`} />

          <img src={hmytes} alt="Hmytes" className={`h-[60px] sm:h-full transition-all duration-[2s] ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-180'}`} />

          <img src={Quadbtechnew} alt="QuadB" className={`h-[60px] sm:h-full transition-all duration-[2s] ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-180'}`} />
        </div>
      </div>
      <div className={`absolute left-[-60%] bottom-0 rounded-full h-full blur-lg opacity-50 ${isHovered ? 'opacity-70' : ''} w-[100%] pointer-events-none`} style={{
                    backgroundImage: 'radial-gradient(circle, rgba(240, 246, 0, 0.7), rgba(240, 246, 0, 0.3), rgba(240, 246, 0, 0.1), rgba(84, 85, 66, 0.05), transparent)',
                }}>
      </div>
      <div className={`absolute right-[-63%] bottom-0 rounded-full h-full blur-lg opacity-50 ${isHovered ? 'opacity-70' : ''} w-[100%] pointer-events-none`} style={{
                    backgroundImage: 'radial-gradient(circle, rgba(240, 246, 0, 0.8), rgba(240, 246, 0, 0.3), rgba(240, 246, 0, 0.1),rgba(84, 85, 66, 0.05), transparent)',
                }}>
      </div>
      <div className="relative text-white flex flex-col items-center pb-12 sm:pb-16 md:pb-20 lg:pb-32 px-4 max-w-4xl mx-auto">
        <h2 className="font-normal text-[22px] leading-[30.8px] text-center">
          Lets{" "}
          <span style={textGradient}>
            Work Together
          </span>
        </h2>

        <div className="relative border-t border-white w-[85%] sm:w-[65%]  mt-4 mx-auto">
          <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
          <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
        </div>

        <h1 className="leading-[30px] sm:leading-[42px] md:leading-[67.2px] text-[25px] sm:text-[32px] md:text-[40px] font-bold mt-6 text-center">
          Great vision without great people is irrelevant.
        </h1>
        <p className="text-[15px] leading-[21px] font-normal sm:text-base md:text-lg text-center italic mt-4 mb-10">
          A New Project Is An Opportunity To Create Something Unique.
        </p>
        <Button2 name="Let's Talk" width="200px" />
      </div>
    </div>
  );
};

export default PremiumPartners;
