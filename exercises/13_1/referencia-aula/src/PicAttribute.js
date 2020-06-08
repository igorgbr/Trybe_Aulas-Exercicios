import React from 'react';
const PicAttribute = (props) => {
    
  const { height, src, alt, legend } = props;
  return (
    <div>
      <img src={src} height={height} alt={alt} />
      {legend}
    </div>
  );
};

export default PicAttribute;
