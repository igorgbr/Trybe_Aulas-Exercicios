import React from 'react';
import PropTypes from 'prop-types';

const Pictures = (props) => {
    console.log(props.children)
    const children = props.children;
    
  return (
      
<div>
    {children}
    
</div>
  )
};

export default Pictures;

Pictures.propTypes = {
    children: PropTypes.element.isRequired,
  };