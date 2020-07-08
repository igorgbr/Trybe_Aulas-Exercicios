// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAcess from './StrictAccess';

import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {


  render() {

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/strictAcess">Área Restrita</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/users/:id"
            render={(props) => <Users {...props} greetingMessage="Good Morning" />}
          ></Route>
          <Route
            path="/strictAcess"
            render={(props) => (
              <StrictAcess {...props} user={{ login: 'igorgbr', pass: '261288ig' }} />
            )}
          ></Route>
        </Switch>
        {/* <div>
          <label htmlFor="Login"></label>
          <input type="text" name="Login" placeholder="Login"/>
          <label htmlFor="Senha"></label>
          <input type="text" name="Senha" placeholder="Senha"/>
          <button>logar</button>
        </div> */}
      </div>
    );
  }
}

export default App;
