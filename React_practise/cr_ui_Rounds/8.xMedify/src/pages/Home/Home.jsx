import React from "react";
import Family from "../../components/Family/Family";
import Blogs from "../../components/Blogs/Blogs";
import Specialisation from "../../components/Specialisation/Specialisation";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import MedicalSpecialist from "../../components/MedicalSpecialist/MedicalSpecialist";
import Coupon from "../../components/Coupon/Coupon";

const Home = ({ onSubmit }) => {
  return (
    <>
      <Navbar></Navbar>
      <Hero onSubmit={onSubmit}></Hero>
      <Coupon></Coupon>
      <Specialisation></Specialisation>
      <Blogs></Blogs>
      <PatientCaring></PatientCaring>
      <MedicalSpecialist></MedicalSpecialist>
      <Family></Family>
    </>
  );
};

export default Home;
