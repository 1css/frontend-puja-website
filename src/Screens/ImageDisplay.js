import React from "react";
// import "../CSS/ImagesDisplay.css"
import "../CSS/ImagesDisplay.css";

const ImageDisplay = () => {
  const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
    "https://picsum.photos/200/300?random=9",
    "https://picsum.photos/200/300?random=10",
    "assets/Carosuel/hanuman.jpg"
  ];
  return (
    <div>
    <h5 className="text-center">Gallery</h5>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
