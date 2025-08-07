import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Marquee from "../../components/Marquee/Marquee";
import ScrollBall from "../../components/ScrollBall/ScrollBall";
import PersonalizedServices from "../../components/PersonalizedServices/PersonalizedServices";
import Portfolio from "../../components/Portfolio/Portfolio";
import WhatWeWorkIn from "../../components/WhatWeWorkIn/WhatWeWorkIn";
import Founder from "../../components/Founder/Founder";
import Gallery from "../../components/Gallery/Gallery";
import Teams from "../../components/Teams/Teams";
import PremiumPartners from "../../components/PremiumPartners/PremiumPartners";
import PowerfullTechSuit from "../../components/PowerfullTechSuit/PowerfullTechSuit";

function Home() {
  return (
    <div id="home" className="">
      <HomeBanner />
      <Marquee />
      <PowerfullTechSuit />
      <ScrollBall />
      <Portfolio />
      <WhatWeWorkIn />
      <Founder />
      <Teams />
      <PersonalizedServices />
      <Gallery />
      <PremiumPartners />
    </div>
  );
}

export default Home;
