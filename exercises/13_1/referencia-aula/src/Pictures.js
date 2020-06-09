import React from 'react';
import PropTypes from 'prop-types';

const Pictures = (props) => {
    const { height, src, alt, legend } = props;
    return (
      <div>
        <img src={src} height={height} alt={alt} figcaption={legend}/>
      </div>
  )
};

export default Pictures;

Pictures.propTypes = {
    children: PropTypes.element.isRequired,
  };