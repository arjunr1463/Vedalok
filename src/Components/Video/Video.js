import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";

function Video() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const data = [
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/Kd9MSuTecDc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/wrqRR7qGwPc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/yqfY8GoAHOM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/jeapl_RfnzE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/KPGavPukYMs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/DARgFzVcIsc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
          className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/hD5dS-yA0oE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
        className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/OMzPRg1rLUk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      video: (
        <iframe
        className="w-[90vw] h-[200px] sm:w-[300px]  lg:w-[320px] lg:h-[250px]"
          src="https://www.youtube.com/embed/3A80hEahcbQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
  ];
  const lastPostIndex = currentPage * postsPerPage;
  const FirstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(FirstPostIndex, lastPostIndex);
  return (
    <div className="px-[10px]  py-[50px] md:py-[100px]">
      <div className="flex justify-center  items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[20px] ">
          {currentPost.map((datas) => (
            <div>{datas.video}</div>
          ))}
        </div>
      </div>
      <div>
        <Pagination
          totalpost={data.length}
          postsperpage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPostPerPage={setPostPerPage}
        />
      </div>
    </div>
  );
}

export default Video;
