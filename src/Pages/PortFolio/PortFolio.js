import React from "react";
import Banner from "../../Components/Banner/PortFolio/PortFolio";
import Main from "../../Components/PortFolio/PortFolio";
import Scroll from "../../Components/ScrollToTop/ScrollToTop";

function PortFolio() {
  return (
    <div>
      <Scroll/>
      <Banner />
      <Main />
    </div>
  );
}

export default PortFolio;
