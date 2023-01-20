import React from "react";
import image from "../../Assets/About/aboutbg1.jpg";
import image1 from "../../Assets/About/Venugopal.jpg";

function AboutUs() {
  return (
    <div className="flex flex-col gap-[20px] md:gap-[100px] font-lora md:px-[10px] py-[50px] md:py-[100px]">
      {/*Aboutus */}
      <div className=" flex flex-col items-center md:items-start md:flex-row gap-[30px] lg:gap-[60px] md:justify-center">
        <div className="flex px-[10px] w-full flex-col sm:items-center md:hidden">
          <h className="font-semibold text-[#ffad05] text-[20px] sm:text-[25px]">
            WELCOME TO PAVAK
          </h>
          <div>
          <h className="font-semibold text-[35px] sm:text-[35px] border-b-[3px] border-[#ffad05]">ABOUT US</h>
          </div>
        </div>
        <div className="flex sm:px-[100px] md:px-[10px] ">
          <img
            src={image}
            alt=""
            className="w-[100vw] h-[400px] sm:h-[600px]  md:w-[350px] lg:w-[450px] md:h-[600px] object-cover"
          />
        </div>
        <div className="flex flex-col md:w-[60vw] lg:w-[45vw]  gap-[30px]">
          <div className="hidden md:flex flex-col">
            <h className="font-semibold text-[#ffad05]">WELCOME TO PAVAK</h>
            <div>
          <h className="font-semibold text-[28px] sm:text-[35px] border-b-[3px] border-[#ffad05]">ABOUT US</h>
          </div>
          </div>
          <div className="px-[10px] sm:px-[100px] md:px-[10px] text-[18px] flex  flex-col gap-[5px] ">
            <h className="text-[20px] font-semibold">
              COME TO THE WIDE WORLD OF VEDAS WITH NO HESITATION
            </h>
            <p className="text-[#7c8287] ">
              Man is a social-being. Mere human can purposefully struggle for
              his existence and progress.For this he needs the co-operation of
              not only his co-beings but also the entire living-Non-living
              world. As he loves himself, he loves and accepts the entire
              universe and the same love makes him say “Loka Samasta Sukhino
              Bhavantu”. He obviously knows, only if sukha resides around him,
              he could have it and, for he prays and longs for the well-being of
              his co-beings, in other words struggles for getting them rid of
              sorrows and miseries of life. Human, in his entire life, works had
              both him-self and in groups for the achievement of ‘Sukha’ and
              cessasion of ‘Dukha’.
            </p>
            <p className="text-[#7c8287] ">
              Pavamanee Arsha Vidya Anusandhana kendram – known as in the
              acronym of ‘PAVAK’- is the very result of this realization.
              ‘Pavak’ is a moral institution which works on no profit- no loss
              basis. Any individual, irrespective of his/her religion, age,
              gender,language and nation can achieve progress by joining in its
              working structure and learning system. The main stream of this
              school is – Teaching Vedas with its ‘Angas’ and ‘Upangas’. This
              project (PAVAK) is the total sum of the explorations and
              researches done by Darshanacharya Venugopal on the various spheres
              of vedas for the last 38 years. Acharya Venugopal has a special
              quest and strong desire to share, whatever knowledge he has
              visualized, to the people who desires to know such things.
              ‘Pavamanee’ or ‘Pavak’ is the personified form of his quest.
              Strong desire is the mother of creation and human life depends on
              the same desire which is the cause of re-birth. You are requested
              to awake your quest, are welcomed to Pavamanee’s VEDAWORLD which
              leads the human to the path of realization..
            </p>
          </div>
        </div>
      </div>
      {/*OnAcharya */}
      <div className="px-[10px] flex flex-col md:flex-row md:justify-center gap-[30px] lg:gap-[60px]">
        <div className="text-[18px] flex flex-col md:w-[60vw] lg:w-[45vw] gap-[30px]">
          <div className="sm:px-[100px] md:px-0">
            <h className="font-semibold text-[35px] border-b-[3px] border-[#ffad05]">
              ON ACHARYA
            </h>
          </div>

          <p className="text-[#7c8287] sm:px-[100px] md:px-0">
            Richas long for ‘Jagrutah’ (one who is awaken), The ‘Sama’ (music
            form of vedas) flows to him in the form of ‘Soma’ (Rasa). These
            words are apt for our Acharya, Darshanacharya Venugopal. Our Acharya
            was born at Kanayannur village in Ernakulum dist. on 1963. After
            metriculation, He engaged in various social activities. With an
            inner quest for learning Sanskrit, joined for pre-degree, then
            completed degree with Sanskrit vyakarana. He, then, joined ‘DARSANA
            YOGA MAHAVIDYALAYA’ in Gujarat and learnt Vedas, Upanishads and
            Darshanas under the presidential ship of Swami Sathyapati Parivrajak
            and Acharya hood of Acharya Late.Gyaneshwar Arya and Acharya Sri
            Vivek Bhushan. Acharya Venugopal the first Adhishthata Acharya of Om
            Shanthi Dharma Vaidika Guru Kula, Karnataka for three years. He
            practised heridetary way of chanting, Manthras of Yajurveda and
            Rigveda from Vedic scholar Sri.Ganapati Joshi and Ghanapathi
            Late.Krishna Bhattji respectively. Staying at gandhinagar, the
            capital city of Gujarat, taught Vedas and Darshanas for eight years.
            PAVAMANEE ARSHA VIDYA ANUSANDHANA KENDRAM (PAVAK) was formed while
            he was teaching Vedas and Darshanas at various institutions in
            Kozhikode on 2008. Wife- Smt. DEVI VENUGOPAL, Lect. in English,
            Global Arts and Science College, Kozhikode.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col w-[80vw] sm:w-[60vw] md:w-[350px]">
            <div className="">
              <img src={image1} alt="" className="w-full" />
            </div>

            <div className="flex flex-col items-center  bg-[#ffad05]">
              <h className="text-[25px] font-semibold">DARSHANACHARYA</h>
              <h className="text-[25px] font-semibold text-center">VENUGOPAL</h>
              <span className="text-[18px]">Acharya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
