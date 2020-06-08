import React from 'react';
const MyList = (props) => {
    console.log(props.children)
  return (
    
    <ul className='list'>
      {props.children.map((child) => {
        if (child.type && child.type === 'li' ) return child;
        return <li>{child}</li>;
      })}
    </ul>
  )
}
export default MyList;