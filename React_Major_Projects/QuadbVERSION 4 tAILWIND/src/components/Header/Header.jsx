import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import { FiAlignJustify } from 'react-icons/fi';
import { FaAngleLeft } from "react-icons/fa6";


function Header() {
  const [menu, setMenu] = useState('home');
  const [width, setWidth] = useState(110);
  const [left, setLeft] = useState(285);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef({});

  const updateFadingStyle = (menuItem) => {
    const { offsetWidth, offsetLeft } = menuItemsRef.current[menuItem];
    setWidth(offsetWidth);
    setLeft(offsetLeft);
  };

  // useEffect(() => {
  //   updateFadingStyle(menu);
  // }, []);

  const navMenu = [
    {
      name : "POS",
      path: "/hiring",
    },
    {
      name : "Portfolio",
      path: "/#portfolio",
    },
    {
      name : "About Us",
      path: "/#aboutus",
    },
    {
      name : "home",
      path: "/#home",
    },
    {
      name : "Hiring",
      path: "/hiring",
    },
    {
      name : "Gallery",
      path: "/#gallery",
    },
    {
      name: "Blog",
      path : "/blogs",
    },
  ]
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const fadingStyle = {
    position: 'absolute',
    top: -25,
    left: left,
    width: width,
    zIndex : '-1',
    height: 50,
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0))',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    transition: 'left 1.5s ease-in-out, width 1.5s ease-in-out',
  };

  const fixedFade = {
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0))',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  }

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const gradientStyle = {
    background: 'linear-gradient(to right, white 0%, black 20%, white 80%)',
  };

  return (
    <div className='fixed bg-[#1E2020] w-full p-3 mb-28 z-50'>

      <div className='items-center flex'>
        <FiAlignJustify className='md:hidden cursor-pointer mt-10 ml-4 text-white text-[32px]' onClick={handleSidebarToggle} />
      </div>

      <div className='items-center flex justify-center' >
        <div className='md:hidden w-full h-[2px] absolute top-[106px]' style={gradientStyle}></div>
        <Link to={'/'}>
          <div className='relative md:hidden'>
            <div className='h-20  w-40 absolute top-[-45px] left-[-5px]' style={fixedFade}></div>
            <img src={logo} className='h-12 mt-[-36px]' alt="" />
          </div>
        </Link>

        <ul ref={menuRef} className='no:hidden md:flex gap-8 justify-center items-center text-white mt-4 relative'>
          {navMenu.map((item, index) => (
            <li
              key={index}
              ref={(el) => menuItemsRef.current[item.name.toLowerCase().replace(' ', '')] = el}
              className='hover:text-yellow-500 relative text-[20px] leading-[35px] font-normal cursor-pointer flex justify-center items-center'
              onClick={() => { setMenu(item.name.toLowerCase().replace(' ', '')); updateFadingStyle(item.name.toLowerCase().replace(' ', '')) }}
            >
              <Link to={item.path}>{item.name === 'home' ? <img className='h-8 cursor-pointer' src={logo} alt="" /> : item.name}</Link>
            </li>
          ))}
          <div style={fadingStyle}></div>
        </ul>

      </div>
  
      <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden text-start`}>
        {/* <FaAngleLeft/> */}
        <div className='flex items-center pl-4 my-10 gap-12'>
          <FaAngleLeft className='h-8 cursor-pointer' onClick={()=>{setIsSidebarOpen(false)}}/> 
          <Link to={'/'}><img className='h-10 ml-[-12px] cursor-pointer' src={logo} alt="" onClick={()=>{setIsSidebarOpen(false)}} /></Link>
        </div>
        <ul className='flex flex-col gap-2 p-4'>
          {navMenu.map((item, index) => (
            <li
              key={index}
              className='hover:text-yellow-500 flex flex-col gap-2 text-[20px] leading-[35px] font-normal cursor-pointer'
              onClick={() => { setMenu(item.name.toLowerCase().replace(' ', '')); setIsSidebarOpen(false); }}
            >
              <Link to={item.name === "home" ? '/contactus' : item.path} className='ml-8'>{item.name === 'home' ? "Contact us" : item.name}</Link>
              <div className="relative ml- border-t border-white">
                <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full"/>
                <div className="absolute w-2 h-2 bg-white top-[-5px] right-0 rounded-full" />
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
