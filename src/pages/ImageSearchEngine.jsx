import React, { useState } from "react";
import "../style/ImageSearchEngine.css";


const ImageSearchEngine = ({setPage}) => {
  const [text, setText] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [obj, setObj] = useState([]);

  const base_url = import.meta.env.VITE_IMAGES_API;
  const key = import.meta.env.VITE_IMAGES_API_KEY;

  const getImages = async () => {
    const res = await fetch(
      `${base_url}page=${pageNum}&query=${text}&client_id=${key}`
    );
    if (!res.ok) {
  const text = await res.text();      // this will show "Rate Limit Exceeded"
  throw new Error(text);
}
    return await res.json();
  };
  const handleClick = async () => {
    const val = await getImages();
    setObj(val.results);
  };

  const handleMore=async ()=>{
    setPageNum((p) => p + 1);
    const val = await getImages();
  setObj((prev) => [...prev, ...val.results]);
  }
  return (
    <div className="imgApp">
      <div className="imgTop">
        <h1 className="imgTitle">Image Search Engine</h1>
        <button className="imgNextBtn" onClick={() => setPage("End")}>Next</button>
      </div>

      <form className="imgForm" onSubmit={(e) => e.preventDefault()}>
        <input
          className="imgInput"
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text...."
        />
        <button className="imgSearchBtn" type="button" onClick={handleClick}>
          Search
        </button>
      </form>

      <div className="imgGrid">
        {obj.map((val) => (
          <img
            className="imgItem"
            key={val.id || val.urls?.raw}
            src={val.urls?.raw}
            alt={val.alt_description || "image"}
            loading="lazy"
          />
        ))}
      </div>

      <button className="imgMoreBtn" type="button" onClick={handleMore}>
        Load More
      </button>
    </div>
  );
};

export default ImageSearchEngine;
