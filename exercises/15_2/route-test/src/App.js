import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Você está na página Sobre</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            data-testid='input-nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => console.log(this.handleInput(e))}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};