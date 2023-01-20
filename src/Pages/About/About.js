import React from 'react'
import Banner from "../../Components/Banner/About/AboutBanner"
import Scroll from "../../Components/ScrollToTop/ScrollToTop"
import Introduction from "../../Components/AboutIntoduction/AboutIntro"
import Aboutus from "../../Components/AboutUs/AboutUs"
import Trio from "../../Components/Trio/Trio"

function About() {
  return (
    <div >
      <Scroll/>
      <Banner/>
      <Aboutus/>
      <Trio/>
      <Introduction/>
    </div>
  )
}

export default About
