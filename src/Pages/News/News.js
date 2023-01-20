import React from "react";
import Banner from "../../Components/Banner/News/News";
import Main from "../../Components/News/News";
import Scroll from "../../Components/ScrollToTop/ScrollToTop";

function News() {
  return (
    <div className="">
      <Scroll/>
      <Banner />
      <Main />
    </div>
  );
}

export default News;
