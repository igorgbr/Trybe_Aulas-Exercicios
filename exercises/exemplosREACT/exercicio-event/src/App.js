import React, { Component } from 'react';
import './App.css';

class MyLabel extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
}


class MyButton extends Component {
  render () {
  
  return <button onClick={() => {this.props.handleClick(this.props.label); }}>{this.props.label}</button>
  }
}
class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      labelText: ' ',
    };
  }

  setLabelText = (labelText) => {
    this.setState({labelText});
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <MyLabel text={this.state.labelText}/>
        <MyButton handleClick = {this.setLabelText} label="botao 1" />
        <MyButton handleClick = {this.setLabelText} label="botao 2"/>
        <MyButton handleClick = {this.setLabelText} label="botao 3"/>
      </div>
    )
  }

}

export default App;
