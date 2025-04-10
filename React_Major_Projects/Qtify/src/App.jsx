import Home from "./pages/Home";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/Card/Card";
import "./App.css";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";
// import Carousel from "./components/Carousel/Carousel";
// ./ because same directory if it was one before then ../
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Navbar upar fix rahega */}
      {/* Ye section change hoga */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/other" element={<OtherPage />} /> */}
      </Routes>
      {/* <Card></Card> */}
      <Section endpoint="top"></Section>
      <Section endpoint="new"></Section>
      <SongsSection></SongsSection>
    </div>
  );

  /* 

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

*/
};

export default App;
