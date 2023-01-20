import React from "react";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import { FaHandshake } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

function AboutIntro() {
  return (
    <div className="flex flex-col items-center bg-[#fafafa]  gap-[50px] py-[80px] font-lora">
      <div className="flex flex-col gap-[25px] items-center">
        <div className="flex flex-col items-center gap-[5px]">
          <span className="text-[18px] text-[#ffad05]">INTRODUCTION</span>
          <h className="text-[35px] border-b-[3px] border-[#ffad05]">OUR VISION</h>
        </div>
        <span className="text-[14px] max-w-[90vw] text-center">
          COME TO THE WIDE WORLD OF VEDAS WITH NO HESITATION
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-[30px] ">
        <div className="flex flex-col items-center w-[90vw] sm:w-[500px] md:w-[30vw] lg:w-[300px] h-full  lg:h-[700px] gap-[20px] bg-[#ffffff] shadow-md py-[20px] px-[20px]">
          <i className="bg-[black] text-white h-[70px] w-[80px] flex justify-center items-center text-[40px]">
            <FaHandshake />
          </i>
          <h className="text-[22px] font-semibold">SEVANAM</h>
          <span className="border-b-[1px]"></span>
          <div className="flex ">
            <span className="text-[16px] font-lora break-all">
              The main symptom of awakeness is the awareness about one’s own
              living surroundings. When one develops, he cannot stay unaware of
              the plight his co-beings who were his supporting hands and if he
              does so it obviously blurs his ‘Daivika Bhava’ (divinity). One
              should realize that it is godly to get a chance to serve mankind.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[90vw] sm:w-[500px]  md:w-[30vw] lg:w-[300px] h-full  lg:h-[700px] gap-[20px] bg-[#ffffff] shadow-md py-[20px] px-[20px]">
          <i className="bg-[black] text-white h-[70px] w-[80px] flex justify-center items-center text-[40px]">
            <SignLanguageIcon />
          </i>
          <h className="text-[22px] font-semibold">DHARMA</h>
          <span className="border-b-[1px]"></span>
          <div className="flex  ">
            <span className=" text-[16px] font-lora break-all">
              Dharma means doing one’s responsibilities in a proper way.
              Whereas, offering one’s excess wealth and possessions (keeping the
              essentials for his existence) to whom it deserves – is Dana. Among
              these, more importance is given to ‘Dharma’ (Morality) and other
              twos are considered as its wings. A Dana is not Dana where someone
              aquires somebody else Dhana (wealth) and donates to someone else.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center w-[90vw] sm:w-[500px] md:w-[30vw] lg:w-[300px] h-full lg:h-[700px] gap-[20px] bg-[#ffffff] shadow-md py-[20px] px-[20px]">
          <i className="bg-[black] text-white h-[70px] w-[80px] flex justify-center items-center text-[40px]">
            <BsCurrencyDollar />
          </i>
          <h className="text-[22px] font-semibold">DANA</h>
          <span className="border-b-[1px]"></span>
          <div className="flex ">
            <span className="text-[16px] font-lora break-all">
              ‘Dhana’ or ‘Artha’ is a necessity to human. Man can satisfy his
              desires using the wealth to a certain limit. ‘Dhanam’ (Money)
              automatically comes to the person who practise and propagate
              Dharma, but a great care has to be given to stick on dharma and
              never leave it for monetary purposes as only Dharma is the cause
              of ‘sukha’ – the happiness. People seek the glorious path of
              virtues when they observe a person who practises virtues. It’s
              quite unfortunate if somebody thinks, “Let others be ok, then I
              will try to be ok”. Vedas cannot be protected by the weak who
              believes in such. Weak ideology but it is amazing that the study
              of vedas makes ‘the weak’ a strong one.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
