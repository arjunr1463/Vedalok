import React from "react";
import Banner from "../../Components/Banner/Home/HomeBanner";
import Welcome from "../../Components/Welcome/Welcome"
import Introduction from "../../Components/Introduction/Introduction";
import Recent from "../../Components/RecentNews/RecentNews"
import Gallery from "../../Components/Gallery/Gallery"
import Scroll from "../../Components/ScrollToTop/ScrollToTop";

function Home() {
  return (
    <div className="">
      <Scroll/>
      <Banner />
      <Welcome/>
      <Introduction/>
      <Recent/>
      <Gallery/>
    </div>
  );
}

export default Home;
