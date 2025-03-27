import React from 'react'

function Heading() {

    const textGradient = {
        backgroundImage:"linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
        WebkitBackgroundClip: "text",
        color: "transparent",
    }
  return (
    <div className="text-white mt-20 mb-28  w-full flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-1 md:gap-3 px-4 sm:px-6 md:px-8">
        <div>
        <h1 className="font-nephilm text-[35px] font-normal leading-[67.2px] tracking-[0.02em] text-center md:text-4xl">
          What we
          <span
            style={textGradient}
            className="text-[35px] md:text-4xl font-normal"
          >
            {` work `}
          </span>
          in
        </h1>
        <div className="relative border-t border-white w-3/4 mt-4 mb-8 mx-auto">
          <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
          <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
        </div>
        </div>
        <h3 className="font-proximafont-bold mb-5 sm:mb-0 text-2xl md:text-[30px]  text-center">
          Quadbtech was founded as a one-stop digital solutions firm.
        </h3>
        <p className="font-proxima font-[400] md:text-[18px] leading-[24px] tracking-[0.06em] w-[100%] text-center sm:w-[80%] md:w-[75%]">
          Today, Quadbtech has grown into a full-fledged internet marketing firm
          with versatile services. We have developed and worked with various
          different platforms and languages. Our expertise in these diverse
          developing platforms has helped us create many websites and services
          for multiple industries.
        </p>
      </div>

    </div>
  )
}

export default Heading