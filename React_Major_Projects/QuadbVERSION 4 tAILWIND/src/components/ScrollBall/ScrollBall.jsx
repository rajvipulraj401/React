import React from 'react';
import Path from './Path';
import useInView from '../Hook/useInView'; // Import the custom hook

function ScrollBall() {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const [setRef3, inView3] = useInView({ threshold: 0.1 });

  return (
    <div className="flex flex-col justify-center items-center container mx-auto">
      <div className="flex text-white flex-col items-center mt-14 gap-7">
        <h3 className="font-nephilm text-[20px] sm:text-[28px] md:text-[32px] font-normal leading-[25px] sm:leading-[34px] md:leading-[44px] text-center px-4">
          We are creative designers, developers and marketers from India driven
          by a common purpose to inspire, create and launch ground-breaking
          ideas.
        </h3>

        <p className="text-[15px] md:text-[24px] mt-6 mb-28 pb-4 leading-[18px] md:leading-[25px] sm:leading-[33px] font-bold font-proxima text-center px-4">
          We love taking your vision to reality. Here's how we work:
        </p>
      </div>
      <div className="relative w-full max-w-[95%] overflow-hidden">
        <Path />
        <div ref={setRef1} className="absolute z-10 top-[7%] xl:top-[12.5%] left-[5%] sm1:left-[12%] lg:left-[15%] xl:left-[40%] text-white">
          <h1
            className={`leading-[20.25px] sm1:leading-[24px] sm:leading-[32px] md:leading-[44.8px] text-[12px] dxs:text-[14.46px] sm1:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold font-proxima mb-2 sm:mb-4 md:mb-6 lg:mb-8 transition-transform duration-1000 ease-out ${
              inView1 ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
            }`}
          >
            We find the Creatives, so you don't have to
          </h1>
          <div
            className={`w-[80%] transition-opacity duration-1500 ease-out delay-1000 ${
              inView1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="leading-[10.12px] sm1:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[22.4px] text-[7.23px] sm1:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal font-nephilm dxs:mb-2 sm:mb-4 md:mb-6">
              QuadBTech's experience determines the right creative direction based on your company's positioning.
            </p>
            <p className="leading-[10.12px] sm1:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[22.4px] text-[7.23px] sm1:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal font-nephilm">
              When it comes to marketing your brand or business we always make sure to look before we take off. We are working together with you to design and execute innovative, data-driven creatives that win real results.
            </p>
          </div>
        </div>

        <div ref={setRef2} className="absolute top-[41%] md:top-[42%] left-[10%] text-white z-10">
          <h1
            className={`leading-[20.25px] sm1:leading-[24px] sm:leading-[32px] md:leading-[44.8px] text-[12px] dxs:text-[14px] sm1:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold font-proxima mb-2 sm:mb-4 md:mb-6 lg:mb-8 transition-transform duration-1000 ease-out ${
              inView2 ? 'transform translate-x-0 opacity-100' : 'transform translate-x-[-600px] opacity-0'
            }`}
          >
            We create technologies you will be proud of
          </h1>
          <div
            className={`w-[80%] transition-opacity duration-1500 ease-out delay-1000 ${
              inView2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="leading-[10.12px] sm1:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[22.4px] text-[7.23px] sm1:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal font-nephilm dxs:mb-2 sm:mb-4 md:mb-6">
              We work with you to determine the best verbiage that will make the biggest impact.
            </p>
            <p className="leading-[10.12px] sm1:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[22.4px] text-[7.23px] sm1:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal font-nephilm">
              Using the latest technologies we create tools through which your business can grow exponentially.
            </p>
          </div>
        </div>

        <div ref={setRef3} className="z-10 absolute top-[75%] md:ml-[-10px] lg:ml-12 md:top-[78%] left-[7%] lg:left-[30%] text-white w-full sm:w-[600px] md:w-[700px]">
          <h1
            
            className={`leading-[20.25px] sm1:leading-[24px] sm:leading-[32px] md:leading-[44.8px] text-[12px] dxs:text-[14.46px] sm1:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold font-proxima mb-2 sm:mb-4 md:mb-6 lg:mb-8 transition-transform duration-1000 ease-out ${
              inView3 ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
            }`}
          >
            Finally... you dunk it to the basket ring
          </h1>
          <div
            className={`w-[70%] transition-opacity duration-1500 ease-out delay-1000 ${
              inView3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="leading-[10.12px] sm1:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[22.4px] text-[7.23px] sm1:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-normal font-nephilm">
            You can take a chill pill and relax as we work with your team to create technologies and creatives that simply exemplify perfection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ScrollBall;
