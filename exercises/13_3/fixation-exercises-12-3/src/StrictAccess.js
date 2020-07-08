// arquivo StrictAcess.js
import React from 'react';
import { Redirect } from 'react-router-dom';

const funcValida = (login, pass) => {
  return login === 'igorgbr' && pass === '261288ig' ? (
    <p>Welcome {login}, você esta <span style={{color: 'green'}}>Online</span>!</p>
  ) : (
    // alert('Login e senha incorretos')
(    <div>
    <Redirect to = "/" />
    </div>)
  );
};

const StrictAcess = (props) => <div>{funcValida(props.user.login, props.user.pass)}</div>;

export default StrictAcess;
