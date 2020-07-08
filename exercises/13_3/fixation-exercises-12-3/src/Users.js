// arquivo Users.js
import React from 'react';



const Users = (props) => (
  <div>
    {console.log(props)}
    <h2> Users </h2>
    <p> {props.greetingMessage}, this is my awesome Users component </p>
    <h3>ID: {props.match.params.id}</h3>
  </div>

);


export default Users;
