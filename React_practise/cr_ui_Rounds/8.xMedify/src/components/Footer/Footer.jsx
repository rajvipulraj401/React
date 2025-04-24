// import React from "react";
// import styles from "./Footer.module.css";
// import Logo from "../Logo/Logo";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
// import { MdKeyboardArrowRight } from "react-icons/md";

// const Footer = () => {
//   return (
//     <>
//       <div className={styles.footerContainer}>
//         <div className={styles.footerGrid}>
//           <div className={styles.logoAndIcons}>
//             <Logo />
//             <div className={styles.iconContainer}>
//               <div className={styles.icon}>
//                 <FaFacebookF />
//               </div>
//               <div className={styles.icon}>
//                 <FaTwitter />
//               </div>
//               <div className={styles.icon}>
//                 <FaYoutube />
//               </div>
//               <div className={styles.icon}>
//                 <FaPinterest />
//               </div>
//             </div>
//           </div>

//           {/* ----NOW below is only links  */}
//           <div className={styles.links}>
//             <ul>
//               <li key="about-us">
//                 <MdKeyboardArrowRight className={styles.arrow} /> About Us
//               </li>
//               <li key="our-pricing">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Our Pricing
//               </li>
//               <li key="our-gallery">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Our Gallery
//               </li>
//               <li key="appointment">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Appointment
//               </li>
//               <li key="privacy-policy">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Privacy Policy
//               </li>
//             </ul>
//           </div>

//           <div className={styles.links}>
//             <ul>
//               <li key="orthology">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Orthology
//               </li>
//               <li key="neurology">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Neurology
//               </li>
//               <li key="dental-care">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Dental Care
//               </li>
//               <li key="opthalmology">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Opthalmology
//               </li>
//               <li key="cardiology">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Cardiology
//               </li>
//             </ul>
//           </div>

//           <div className={styles.links}>
//             <ul>
//               <li key="about-us-2">
//                 <MdKeyboardArrowRight className={styles.arrow} /> About Us
//               </li>
//               <li key="our-pricing-2">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Our Pricing
//               </li>
//               <li key="our-gallery-2">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Our Gallery
//               </li>
//               <li key="appointment-2">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Appointment
//               </li>
//               <li key="privacy-policy-2">
//                 <MdKeyboardArrowRight className={styles.arrow} /> Privacy Policy
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className={styles.copyright}>
//           Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

// -------------Footer links using array FOLLOWING dry principle----------------
import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

//  Footer links as array of arrays
const footerLinks = [
  ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
  ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
];

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        {/* Logo + Social Icons */}
        <section className={styles.logoAndIcons}>
          <Logo />
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <FaFacebookF />
            </div>
            <div className={styles.icon}>
              <FaTwitter />
            </div>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
            <div className={styles.icon}>
              <FaPinterest />
            </div>
          </div>
        </section>

        {/* Links with arrow icons */}
        {footerLinks.map((group, idx) => (
          <nav className={styles.links} key={idx}>
            <ul>
              {group.map((item, i) => (
                <li key={i}>
                  <MdKeyboardArrowRight className={styles.arrow} /> {item}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Copyright */}
      <small className={styles.copyright}>
        Copyright ©2025 Surya Nursing Home.com. All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;
