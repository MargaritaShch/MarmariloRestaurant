import React,{useState} from "react";
import './Slider.css';
import photo1 from "./ImgSlider/adverts3.jpg";
import photo2 from "./ImgSlider/adverts4.jpg";
import photo3 from "./ImgSlider/photo1.jpg";
import video from './ImgSlider/video.mp4';
 

function Slider() {
  const media = [
    { type: "video", source: video },
  { type: "image", source: photo1 },
  { type: "image", source: photo2 },
  { type: "image", source: photo3 }
  
  ]
  const [currentMedia, setCurrentMedia] = useState(0);

  const goToNextMedia = () => {
    setCurrentMedia((currentMedia + 1) % media.length);
  };

  const goToPreviousMedia = () => {
    setCurrentMedia((currentMedia - 1 + media.length) % media.length);
  };

  return (
    <div className="slider">
      <div onClick={goToPreviousMedia} className="left"></div>
      {media[currentMedia].type === "image" ? (
        <img src={media[currentMedia].source} alt={`photo-${currentMedia + 1}`} />
      ) : (
        <video controls>
          <source src={media[currentMedia].source} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      )}
      <div onClick={goToNextMedia} className="right"></div>
    </div>
  );
}

export default Slider