import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

const DropDownButton = ({ onJobTypeSelect }) => {
  const [dropdowns, setDropdowns] = useState({
    jobType: false,
    category: false,
    location: false,
  });

  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 640);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 640);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdowns({ jobType: false, category: false, location: false });
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (type) => {
    setDropdowns((prev) => {
      const newState = { jobType: false, category: false, location: false };
      newState[type] = !prev[type];
      return newState;
    });
  };

  const Button4MdUp = () => (
    <div
      className="button4-container w-[530px] sm:w-[620px] md:w-[720px] lg:w-[765px] h-[44px] sm:h-[48px] flex items-center justify-center text-white font-semibold font-proxima-nova sm:text-[14px] text-[11px] leading-6 mb-[50px] mt-[10px]"
      style={{
        border: "1px solid transparent",
        borderRadius: "48px",
        backgroundImage:
          "linear-gradient(#2f2f2f, #2f2f2f), linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        boxShadow: `
        0px 0px 0px 1px rgba(255, 255, 255, 0.06) inset,
        1px 1px 0px 0px rgba(255, 255, 255, 0.08) inset,
        0px 8px 40px -20px rgba(255, 255, 255, 0.2)
      `,
      }}
      ref={dropdownRef}
    >
      <div className="flex items-center justify-between w-full text-[16px] sm:text-[18px] ">
        <div className="relative flex items-center ">
          <div
            className="flex justify-center items-center gap-2 pl-5 sm:pl-10 cursor-pointer"
            onClick={() => toggleDropdown("jobType")}
          >
            <p className="text-[15.63px] font-bold text-nowrap">Job Type</p>
            <IoIosArrowDown size={25} />
          </div>
          {dropdowns.jobType && (
            <div className="dropdown_menu-2 absolute top-10 left-0 px-4 py-2 ml-[10px] md:w-[170px] w-[140px] text-[16px] md:text-[18px] text-nowrap rounded-[8px]">
              <DropdownMenu
                items={[
                  "UI/UX Designer",
                  "Video Editor",
                  "Graphic Designer",
                  "Web Developer",
                ]}
                onSelect={(item) => {
                  onJobTypeSelect(item);
                  setDropdowns({
                    jobType: false,
                    category: false,
                    location: false,
                  });
                }}
              />
            </div>
          )}
        </div>

        <span className="pl-5">
          <hr className="border h-8" />
        </span>

        <div className="relative flex items-center">
          <div
            className="flex justify-center items-center gap-2 pl-5 sm:pl-10 cursor-pointer"
            onClick={() => toggleDropdown("category")}
          >
            <p className="text-[15.63px] font-bold">Category</p>
            <IoIosArrowDown size={25} />
          </div>
          {dropdowns.category && (
            <div className="dropdown_menu-2 absolute top-10 left-0 px-4 py-2 ml-[10px] md:w-[170px] w-[140px] text-[16px] md:text-[18px]  text-nowrap rounded-[8px]">
              <DropdownMenu
                items={[
                  "UI/UX Designer",
                  "Video Editor",
                  "Graphic Designer",
                  "Web Developer",
                ]}
                onSelect={() =>
                  setDropdowns({
                    jobType: false,
                    category: false,
                    location: false,
                  })
                }
              />
            </div>
          )}
        </div>

        <span className="pl-5">
          <hr className="border h-8" />
        </span>

        <div className="relative flex items-center mr-[10px]">
          <div
            className=" flex justify-center items-center gap-2 pl-5 sm:pl-10 cursor-pointer"
            onClick={() => toggleDropdown("location")}
          >
            <p className="text-[15.63px] font-bold">Location</p>
            <IoIosArrowDown size={25} />
          </div>
          {dropdowns.location && (
            <div className="dropdown_menu-2 absolute top-10 left-0 px-4 py-2 ml-[10px] md:w-[170px] w-[140px] text-[16px] md:text-[18px]  text-nowrap rounded-[8px]">
              <DropdownMenu
                items={["Location1", "Location2", "Location3"]}
                onSelect={() =>
                  setDropdowns({
                    jobType: false,
                    category: false,
                    location: false,
                  })
                }
              />
            </div>
          )}
        </div>
        <Button name="Search" />
      </div>
    </div>
  );

  const Button4SmDown = () => (
    <div
      className=" flex flex-col w-full h-[120px] gap-8  justify-center  mb-8"
      ref={dropdownRef}
    >
      <div className="flex  w-[90%]  dxs:w-[85%] dxs:top-[300px] top-[275px] ">
        <div
          className=" flex items-center justify-center absolute right-[0px] xxs:justify-evenly w-[85%] sm2:w-[80%]   gap-[20px]   h-[44px] 
           text-white font-proxima-nova leading-6"
          style={{
            border: "1px solid transparent",
            borderRight: "",
            borderRadius: "48px 0 0 48px",
            backgroundImage:
              "linear-gradient(#2f2f2f, #2f2f2f), linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
            boxShadow: `
            0px 0px 0px 1px rgba(255, 255, 255, 0.06) inset,
            1px 1px 0px 0px rgba(255, 255, 255, 0.08) inset,
            0px 8px 40px -20px rgba(255, 255, 255, 0.2)
          `,
          }}
        >
          <div className=" relative flex items-center">
            <div
              className="flex justify-center items-end gap-2 cursor-pointer"
              onClick={() => toggleDropdown("jobType")}
            >
              <p className="sm1:text-[16px] text-[14px] font-bold">Job Type</p>
              <IoIosArrowDown size={20} />
            </div>
            {dropdowns.jobType && (
              <div className="dropdown_menu-2 p-2 left-[-20px] text-nowrap top-9 rounded-[8px] z-40 absolute  w-[120px] text-[12px] ">
                <DropdownMenu
                  items={[
                    "UI/UX Designer",
                    "Video Editor",
                    "Graphic Designer",
                    "Web Developer",
                  ]}
                  onSelect={(item) => {
                    onJobTypeSelect(item);
                    setDropdowns({
                      jobType: false,
                      category: false,
                      location: false,
                    });
                  }}
                />
              </div>
            )}
          </div>

          <span className="">
            <hr className="border h-7" />
          </span>

          <div className=" relative flex items-center">
            <div
              className="flex justify-center items-end gap-2 cursor-pointer"
              onClick={() => toggleDropdown("category")}
            >
              <p className="sm1:text-[16px] text-[14px]  font-bold">Category</p>
              <IoIosArrowDown size={20} />
            </div>
            {dropdowns.category && (
              <div className="dropdown_menu-2 p-2 left-[-20px] text-nowrap top-9 rounded-[8px] z-40 absolute bg-[#1a1919] w-[120px] text-[12px] ">
                <DropdownMenu
                  items={[
                    "UI/UX Designer",
                    "Video Editor",
                    "Graphic Designer",
                    "Web Developer",
                  ]}
                  onSelect={() =>
                    setDropdowns({
                      jobType: false,
                      category: false,
                      location: false,
                    })
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="flex dxs:w-[85vw]  dxs:mt-10 mt-8"> */}
      <div className="flex dxs:w-[85vw]  dxs:mt-10 mt-10">
        <div
          className="flex items-center dxs:w-[95%] sm1:w-[88%] sm0:w-[90%] xxs:w-[95%] ss:w-[110%] w-[115%] absolute  left-[-70px] dxs:left-[-20px] text-white font-proxima-nova leading-6"
          style={{
            border: "1px solid transparent",
            borderLeft: "none",
            borderRadius: "0 48px 48px 0",
            backgroundImage:
              "linear-gradient(#2f2f2f, #2f2f2f), linear-gradient(90deg, #F0F600 37.65%, #00A8AA 104.96%)",
            backgroundOrigin: "border-box",
            backgroundClip: "content-box, border-box",
            boxShadow: `
            0px 0px 0px 1px rgba(255, 255, 255, 0.06) inset,
            1px 1px 0px 0px rgba(255, 255, 255, 0.08) inset,
            0px 8px 40px -20px rgba(255, 255, 255, 0.2)
          `,
          }}
        >
          <div className="flex items-center justify-between w-full sm:text-[18px] font-semibold">
            {/* <div className="relative flex items-center  left-[100px] dxs:left-[70px]"> */}
            <div className="relative flex items-center  ">
              <div
                className="flex justify-center  items-end gap-2  cursor-pointer"
                onClick={() => toggleDropdown("location")}
              >
                <p className="sm1:text-[16px] text-[14px]  pl-[85px] dxs:pl-14  sm2:pl-24 font-bold">
                  Location
                </p>
                <IoIosArrowDown size={20} />
              </div>
              {dropdowns.location && (
                // <div className="dropdown_menu-2 p-2 left-[-20px] text-nowrap top-9 rounded-[8px] absolute bg-[#1a1919] w-[120px] text-[12px] ">
                <div className="dropdown_menu-2 p-2 left-[75px] dxs:left-[40px] sm2:left-[85px] text-nowrap top-9 rounded-[8px] absolute bg-[#1a1919] w-[120px] text-[12px] ">
                  <DropdownMenu
                    items={["Location1", "Location2", "Location3"]}
                    onSelect={() =>
                      setDropdowns({
                        jobType: false,
                        category: false,
                        location: false,
                      })
                    }
                  />
                </div>
              )}
            </div>
            <div className="button-text">
              <Button name="Search" width="220px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isMdUp ? <Button4MdUp /> : <Button4SmDown />;
};

const DropdownMenu = ({ items, onSelect }) => {
  return (
    <div className="dropdown_menu-2 flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`dropdown_item-${index + 1} mb-2 cursor-pointer`}
          onClick={() => onSelect(item)}
        >
          {item}
          {index !== items.length - 1 && <hr className="dropdown-line" />}
        </div>
      ))}
    </div>
  );
};

export default DropDownButton;
