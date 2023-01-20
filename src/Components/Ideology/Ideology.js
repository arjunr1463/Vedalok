import React from "react";
import image from "../../Assets/Ideology/ideology.png";

function Ideology() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row justify-center py-[50px] md:py-[100px] gap-[50px]">
      <div className="flex text-center md:hidden">
        <h className="text-[20px] font-semibold">
          FAITH – RELIGION – CASTE – COMMUNITY – POLITICAL IDEOLOGY – NATION –
          HERITAGE – AHARA (FOOD HABITS) AND VIHARA (GESTURES’)
        </h>
        </div>
      
      <div>
        <img src={image} alt="" className="h-[400px] sm:h-[500px] md:h-[600px]" />
      </div>
      <div className="w-[100vw] text-[18px] sm:w-[650px] md:w-[600px] flex flex-col gap-[20px] px-[20px] md:px-[10px]">
        <div className="hidden md:flex">
        <h className="text-[22px] font-semibold">
          FAITH – RELIGION – CASTE – COMMUNITY – POLITICAL IDEOLOGY – NATION –
          HERITAGE – AHARA (FOOD HABITS) AND VIHARA (GESTURES’)
        </h>
        </div>
        <p className="text-[#7c8287] font-lora">
          Each individual either belongs to or believes in any one of the above
          mentioned elements or factors. Veda never opposes human’s fragmental
          communal existence and the codes of faith. Vedas at times forbidder
          some ideas, for some people, according to their Kata (time), Desha
          (space) and living environments and it is nothing but a well-wish for
          the mankind of that era and after when the technical error have been
          cleared out, The vedas itself allows the same forbidden ideas for the
          same human to practise. Vedas are the total sum of the entire faith
          system that had been existed, still existing, and is about to be
          existed in the world.
        </p>
        <p className="text-[#7c8287] font-lora">
          A Smriti Vakya, “Sarvam Vedat Prasidhyati” is to be remembered here.
          One should struggle for harmony when there is an imbalance in the
          institution and when the same harmony is regained, one should again
          struggle to maintain harmonious relations. There is no room for
          extremeness as it damages the harmonious balance and boundaries of the
          school. All the members of the school are requested to keep their own
          decency during their period of learning and are expected to co-operate
          with the norms and values of the institution.
        </p>
        <p className="text-[#7c8287] font-lora">
          HIMSA - AHIMSA , SUDDHI – ASUDDHI , UPPER – LOWER , BIG – SMALL , LIKE
          – DISLIKE , TRUE – FALSE , HAPPINESS – MISERIES , all are relative
          here and the approach to these elements are also relative. Each
          citizen of our country is free to have his/her own habits of food
          according to our constitution. All three Gunas – Satvika – Rajasika –
          Thamasika, are also relative in nature, only what one should do is to
          learn vedas very closely to experience his/her own faith codes
          directly. Let us learn the rest directly.
        </p>
      </div>
    </div>
  );
}

export default Ideology;
