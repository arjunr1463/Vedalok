import React from "react";
import image1 from "../../Assets/Gallery/gallery2.jpg"
import image2 from "../../Assets/News/news.jpg";
import image3 from "../../Assets/Gallery/gallery1.jpg"
import image4 from "../../Assets/Gallery/gallery3.jpg"
import image5 from "../../Assets/Gallery/gallery4.jpg"
import image6 from "../../Assets/Gallery/gallery6.jpg"
import image7 from "../../Assets/Gallery/gallery5.jpg"
import Card from "../Card/PortFolio";

function PortFolio() {
  const data = [
    {
      image:image7,
      title: "ACHARYA AND ACHARYA PADNI",
    },
    {
      image: image2,
      title: "CONDUCTING ATIMAHA AGNIHOTRAM @ BALUSSERY ON 2004",
    },
    {
      image: image5,
      title: "CONDUCTING ATIMAHA AGNIHOTRAM @ BALUSSERY ON 2004",
    },
    {
      image: image1,
      title: "CONDUCTING ATIMAHA AGNIHOTRAM @ BALUSSERY ON 2004",
    },
    {
      image: image4,
      title:
        "ACHARYA PADNI DOING HER SALUTE TO HER VEDACHERY SRI.GHANAPATI JOSHY",
    },
    {
      image: image3,
      title: "VELAYUDHA SWAMY,VISWETTAN AND ACHARYA ON A DIAS",
    },
    {
      image: image6,
      title: "SHANTHI DHAM GURUKULAS GURU POORNIMA",
    },
  ];
  return (
    <div className="flex justify-center py-[100px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[60px] ">
      {data.map((datas) => (
        <div>
          <Card image={datas.image} title={datas.title} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default PortFolio;
