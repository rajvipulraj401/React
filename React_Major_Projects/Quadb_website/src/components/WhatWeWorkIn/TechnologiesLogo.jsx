import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import shadow from '../../assets/Images/ellips.png'
import ellips from '../../assets/Images/Ellipse2.png'

const TechnologiesLogo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const fixedFade = {
        background: 'linear-gradient(to bottom, rgba(240, 246, 0, 0.5), rgba(240, 246, 0, 0))',
        clipPath: 'polygon(10% 100%, 90% 100%, 71% 0%, 31% 0%)',
    }
    const glowingLineStyles = {
        width: '40%',
        height: '6px',
        backgroundColor: '#ffcc00',
        boxShadow: '0 0 20px rgba(255, 204, 0, 1), 0 0 30px rgba(255, 204, 0, 1), 0 0 40px rgba(255, 204, 0, 1)',
        filter: 'blur(5px)'
    };
    const glowingLineStylesout = {
        width: '27%',
        // height: '12px',
        backgroundColor: 'linear-gradient(to bottom, rgba(240, 246, 0, 0.5), rgba(240, 246, 0, 0))',
        boxShadow: '0 0 10px rgba(240, 246, 0, 0.5), 0 0 20px rgba(240, 246, 0, 0.2), 0 0 30px rgba(240, 246, 0, 0)',
        // filter: 'blur(10px)'
    };
    const styles = {
        transformOrigin: '0 0',
        background: 'conic-gradient(from 180deg at -3.31% 226.80%, rgba(240, 246, 0, 1) 2deg, rgba(101, 103, 5, 1) 76deg, rgba(23.77, 19.25, 26.25, 0.13) 121deg, rgba(7, 22, 18, 0) 301deg, rgba(0, 0, 0, 0) 350deg, rgba(240, 246, 0, 1) 358deg)',
    };
    
    const styles2 = {
        transformOrigin: '0 0',
        background: 'conic-gradient(from 180deg at -3.31% 226.80%, rgba(240, 246, 0, 1), 2deg, rgba(101, 103, 5, 1), 76deg, rgba(23.77, 19.25, 26.25, 0.13), 109deg, rgba(7, 22, 18, 0.8), 301deg, rgba(0, 0, 0, 0), 350deg, rgba(240, 246, 0, 1), 358deg)',
    };
    
    const styles3 = {
        background: 'rgba(0, 0, 0, 0.01)',
        boxShadow: '54px 54px 54px',
        filter: 'blur(50px)',
        backdropFilter: 'blur(33.33px)',
    };
    
    const styles4 = {
        boxShadow: '646.33px 646.33px 646.33px',
        borderRadius: '9999px',
        filter: 'blur(646.33px)',
    };

 return (
    <div onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
        <div
            id="hirings"
            className="text-white flex justify-center w-full"
            style={{ position: "relative" }}
            onMouseEnter={() => setIsOverlayVisible(true)}
            onMouseLeave={() => setIsOverlayVisible(false)}
        >
            {isOverlayVisible && (
            <div
                style={{
                position: "absolute",
                top: 0,
                left: "10%",
                width: "80%",
                height: "100%",
                zIndex: 10,
                pointerEvents: "none",
                }}
            ></div>
            )}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="max-w-[777px] mt-5 flex flex-col justify-start items-center relative z-20">
                <div className="relative">
                    <div className="">
                        

                        <div className={`${isHovered ? 'flex':'hidden'} animate-flicker `}>
                            <img className="absolute top-[-15%] sm1:top-[-35%] md:top-[-30%]" src={ellips} alt="" />
                            <img className="absolute top-[-22%] sm:top-[-35%] md:top-[-40%]" src={shadow} alt="" />
                            <img className="absolute top-20 w-full" src={shadow} alt="" />
                            <div className=" absolute left-[51%] translate-x-[-50%] top-[-10%]" style={glowingLineStyles}></div>
                            {/* <div className=" absolute left-[79.5%] translate-x-[-50%] top-[13%] rotate-[47deg] h-3 blur-[10px]" style={glowingLineStylesout}></div> */}
                            {/* <div className=" absolute left-[80%] translate-x-[-50%] top-[13%] rotate-[47deg] h-4 blur-[5px]" style={glowingLineStylesout}></div> */}
                            {/* <div className=" absolute left-[80%] translate-x-[-50%] top-[13%] rotate-[47deg] h-6 blur-[2px]" style={glowingLineStylesout}></div> */}
                            <div className="mix-blend-lighten blur-sm w-full flex flex-col justify-center items-center h-[50%] bg-yellow-300 absolute top-[-10%] left-[50%] translate-x-[-50%]" style={{...fixedFade,
                            position: 'absolute',}}>
                                <div className="absolute w-full top-0" style={glowingLineStyles}></div>
                                <div className="w-full absolute top-3" style={glowingLineStyles}></div>
                                <div className="w-full absolute top-4" style={glowingLineStyles}></div>
                            </div>
                        </div>

                        {/* <div className="w-full h-full relative mix-blend-lighten">
                            <div className="w-[1728px] h-[776.89px] left-[0px] top-[0px] absolute">
                                <div className="w-[776.89px] h-[864px] left-[0px] top-[776.89px] absolute rotate-[90deg]" style={styles}></div> 
                                <div className="w-[776.89px] h-[864px] left-[1728px] top-[776.89px] absolute rotate-[-90deg]" style={styles2}></div>
                            </div>
                            <div className="w-[1728px] h-[578.58px] left-[0px] top-[549.42px] absolute" style={styles3}></div> 
                            <div className="w-[968.36px] h-[321.95px] left-[379.82px] top-[373.28px] absolute mix-blend-screen bg-[#F0F600]" style={styles4}></div> 
                        </div> */}
                        
                        <div className="flex sm:mb-2 relative z-20">
                            <ImageContainer img="Wordpress.png" />
                            <ImageContainer img="CakePHP.png" />
                            <ImageContainer img="PHP.png" />
                            <ImageContainer img="Vue.png" />
                            <ImageContainer img="node.png" />
                        </div>
                        <div className="flex sm:mb-2 relative z-20">
                            <ImageContainer img="polymer.png" />
                            <ImageContainer img="react.png" />
                            <ImageContainer img="Angular.png" />
                            <ImageContainer img="wix.png" />
                            <ImageContainer img="Joomla.png" />
                        </div>
                        <div className="flex sm:mb-6 relative z-20">
                            <ImageContainer img="Javascript.png" />
                            <ImageContainer img="Jquery.png" />
                            <ImageContainer img="Bootstrap.png" />
                            <ImageContainer img="Laravel.png" />
                            <ImageContainer img="HTML.png" />
                        </div>
                        <div className="flex mb-14 justify-center items-center relative z-20">
                            <ImageContainer img="CSS.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TechnologiesLogo;
