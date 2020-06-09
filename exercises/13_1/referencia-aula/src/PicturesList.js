import React from 'react';
import PropTypes from 'prop-types';
import Pictures from './Pictures';

const PictureList = (props) => {
    const {children} = props;
    console.log(props.children)
    console.log(Pictures)
  return (
      
<div>
 {children}
 {children}
</div>
  )
};

export default PictureList;

PictureList.propTypes = {
    children: PropTypes.element.isRequired,
  };