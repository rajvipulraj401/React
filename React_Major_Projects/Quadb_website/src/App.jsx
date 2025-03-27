
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Hirings from "./pages/Hirings/Hirings";
import Footer from "./components/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./components/ContactUs/ContactUs";
import NewBlogs from "./pages/Blogs/NewBlogs";

function App() {
  const gradientStyle = {
    background: 'linear-gradient(to right, #3a3a3a 0%, #252525 50%, #060606 100%)',
    // height:"100%"
  };
  return (
    <div className="overflow-x-hidden" style={gradientStyle}>
      <div className="">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blogs />} />
            <Route path="/hiring" element={<Hirings/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/blogs" element={<NewBlogs/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
