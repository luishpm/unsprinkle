import React from "react";

function removeExtension(url) {
  let splitUrl = url.split('.');
  splitUrl.pop(); // Remove the last element (extension)
  return splitUrl.join('.');
}

const Image = ({src, alt}) => {
  let srcNoExtension = removeExtension(src)

  return (
      <picture>
        <source
            type="image/avif"
            srcSet={`${srcNoExtension}.avif 1x,  
                  ${srcNoExtension}@2x.avif 2x, 
                   ${srcNoExtension}@3x.avif 3x `}
        />
        <source
            type="image/jpg"
            srcSet={`${srcNoExtension}.jpg 1x, 
                   ${srcNoExtension}@2x.jpg 2x, 
                   ${srcNoExtension}@3x.jpg 3x `}
        />
        <img src={src} alt={alt}/>
      </picture>
  )
}

export default Image;