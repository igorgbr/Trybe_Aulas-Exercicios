import React from 'react';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
   this.setState({
     counter: 10
   })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { counter } = this.state;
    console.log("shouldComponentUpdate", this.state, nextProps);
    if (nextProps.value > 12 && nextProps.value < 16) return false;
    return true;

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;