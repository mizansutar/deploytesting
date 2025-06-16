import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons';
function Video() {

  return (
    <div className="video">
      <div className="video__Top">
        <img src="https://i.ytimg.com/vi/DyvDXY1aAzA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD4bME9oUdFRq-2F3lIAoOcgwkbOw" alt="" />
        <span>05:40</span>
      </div>
      <div className="Video__title">
        Created app by mizzu
      </div>
      <div className="Video__details">
        <span><AiFillEye /></span>
        <span> 5m veiws </span>
      </div>
      <div className="Video__chanel">
      <img src="https://i.ytimg.com/vi/DyvDXY1aAzA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD4bME9oUdFRq-2F3lIAoOcgwkbOw" alt="" />
      <p>Mizan Channel</p>
      </div>
    </div>
  );
}

export default Video;
