import react, { useState, useEffect } from "react";

import Button from '../../components/Button/Button'

import '../../App.css';

const BlogsMdUp = () => {
  const clip = {
    width: '300px', /* Adjust to your needs */
    height: '300px', /* Adjust to your needs */
    background: 'white',
    backgroundSize: 'cover',
    clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%, 0 40%)',
  }
  // 0 0, 90% 0, 100% 10%, 100% 100%, 0 100%

  return (
    <>
    
      <div
        className="blog-page flex justify-center mb-0 container mx-auto"
        id="blogs"
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-3  w-[95%] md:w-[88%] lg:w-[78%] xl:w-[58%] h-[100vh] mt-24">
          {/* First row, first column (2 row span) */}
          <div
            className="col-span-1 row-span-2 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('Typing.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="imgContents text-white absolute bottom-[20px] z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[18px] md:text-[20px] mb-[-4px]">
                Blog Title
              </h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              <p className="text-[10px] md:text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button>
            </div>
          </div>
          {/* First row, second column (2 column span) */}
          <div className="col-span-2 row-span-1 px-4">
            <h1 className="text-[55px] italic font-normal">
              <span className="font-nephilm"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {` Latest Blogs `}
              </span>
            </h1>
            <p className="text-white text-[20px] font-proxima">
              Figma ipsum component variant main layer. Project export frame
              ipsum clip. Bullet component undo figma editor ellipse.
            </p>
          </div>
          {/* Second row, second column */}
          <div
            className="col-span-1 row-span-1 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('Vegg.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="imgContents text-white absolute bottom-1 z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[18px] md:text-[20px] mb-[-4px]">
                Blog Title
              </h1>
              <h3 className="text-[16px]">Title</h3>
              <p className="text-[10px] md:text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button>
            </div>
          </div>
          {/* Second row, third column (2 row span) */}
          <div
            className="col-span-1 row-span-2 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('MapPin.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="imgContents text-white absolute bottom-5 z-10"> */}
            <div className="imgContents text-white absolute bottom-5 z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[18px] md:text-[20px] mb-[-4px]">
                Blog Title
              </h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              <p className="text-[10px] md:text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button>
            </div>
          </div>
          {/* Third row, first column (2 column span) */}
          <div
            className="col-span-2 row-span-1 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('codeImg.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="imgContents text-white absolute bottom-[14px] left-[60px] z-10"> */}
            <div className="imgContents text-white absolute bottom-1 left-[85px] z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[18px] md:text-[20px] mb-[-4px]">
                Blog Title
              </h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              <p className=" text-[10px] md:text-[12px] pb-[5px] w-[55%] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button>
            </div>
            <div style={clip} className="absolute top-0">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default BlogsMdUp;
// (No need as already exporting Thorught Blogs also we cannot have more
// Than one default export)

// ---------------Now Below we have for the smaller screen---------------

const BlogsMdDown = () => {
  return (
    <>
      <div
        className="blog-page  justify-center flex flex-col mb-[-50px] container mx-auto"
        id="blogs"
      >
        <div className=" col-span-2 row-span-1 px-5  sm:px-[100px] p-4 text-center  mt-28  ">
          <h1 className=" italic font-normal">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="text-[32px] sm:text-[40px] md:text-[45px] font-nephilm"
            >
              {` Latest Blogs `}
            </span>
          </h1>
          <p className="text-white text-[16px]  sm:text-[18px] md:text-[20px] font-proxima">
            Figma ipsum component variant main layer. Project export frame ipsum
            clip. Bullet component undo figma editor ellipse.
          </p>
        </div>

        {/* <div className="grid grid-cols-2 grid-rows-4 gap-3 w-[58%] h-[100vh]"> */}
        <div className=" h-[180vh]  sm:h-[200vh] sm:px-20 mobileBlogs grid grid-cols-2 grid-rows-5 px-16 gap-5  sm:[w-70%] md:[w-65%] ">
          {/* First row, first column (2 col span) */}

          {/* __---------Isse upar text sab hai 📝📝------------ */}

          {/* second row, first column (2 row span) */}
          <div
            className="col-span-1  row-span-2 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('TypingRes.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="imgContents text-white absolute bottom-[20px] z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[20px] mb-[-4px]">Blog Title</h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              {/* <p className="text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button> */}
            </div>
          </div>
          {/* Second row, second column (2 row span) */}

          <div
            className="col-span-1 row-span-2 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('MapPinRes.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="imgContents text-white absolute bottom-5 z-10"> */}
            <div className="imgContents text-white absolute bottom-5 z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[20px] mb-[-4px]">Blog Title</h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              {/* <p className="text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button> */}
            </div>
          </div>

          {/* fourth row, first column (1 row span) */}

          <div
            className="col-span-1 row-span-1 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('VeggRes.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="imgContents text-white absolute bottom-[20px] z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[20px] mb-[-4px]">Blog Title</h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              {/* <p className="text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button> */}
            </div>
          </div>

          {/* fourth row, second column (1 row span) */}

          <div
            className="col-span-1 row-span-1 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('VeggRes.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="imgContents text-white absolute bottom-[20px] z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[20px] mb-[-4px]">Blog Title</h1>
              <h3 className="font-proxima text-[16px]">Title</h3>
              {/* <p className="text-[12px] pb-[5px] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button> */}
            </div>
          </div>

          {/* fifth row, first column (2 column span) */}
          <div
            className="col-span-2 row-span-1 p-4 bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('codeImgRes.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="imgContents text-white absolute bottom-[14px] left-[60px] z-10"> */}
            <div className="imgContents text-white absolute bottom-[14px] left-[60px] z-10">
              <p className="text-[14px] mb-[-4px]">Subheading</p>
              <h1 className="font-nephilm text-[20px] mb-[-4px]">Blog Title</h1>
              <h3 className="text-[16px] font-proxima">Title</h3>
              {/* <p className="text-[12px] pb-[5px] w-[50%] font-nephilm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <Button name="READ MORE" width="120px"></Button> */}
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

// -------------------------------Complete logic below -----------------

// logic--- Till here we have made sure
/* That when we get size bigger than 850px we render one component 
and below that we render another one  */
const Blogs = () => {
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMdUp ? <BlogsMdUp /> : <BlogsMdDown />;
};

export default Blogs;
