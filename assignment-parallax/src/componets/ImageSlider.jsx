import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

function ImageSlider({images}) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
      <SimpleImageSlider
        width={300}
        height={250}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay= {true}
        onStartSlide = {(index, length) => {
          setImageIndex(index);
       }}
        autoPlayDelay = {3}
      />
  )
}

export default ImageSlider