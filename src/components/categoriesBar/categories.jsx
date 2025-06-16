import React, { useState } from 'react';
import './_categeres.scss'; // make sure the filename is correct

const keywords = [
  "All",
  "Music",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Movies",
  "Comedy",
  "Technology",
  "Programming",
  "AI",
  "Crypto",
  "React.js",
  "Javascript",
  "Bollywood",
  "Motivation",
  "Podcasts"
];

function Categories() {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (keyword) => {
    setActiveElement(keyword);
  };

  return (
    <div className="categoriesBar" >
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className={`topnav__keyword ${activeElement === keyword ? "active" : ""}`}
          onClick={() => handleClick(keyword)}
          title={keyword}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
}

export default Categories;
