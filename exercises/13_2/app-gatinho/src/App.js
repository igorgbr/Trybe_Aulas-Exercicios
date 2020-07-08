import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      name: '',
    };
    this.chamaDog = this.chamaDog.bind(this);
    this.saveDog = this.saveDog.bind(this);
    console.log(this.state);
  }
  componentDidMount() {
    if (localStorage.dogURL) {
      const lastDogURL = localStorage.dogURL.split(',')[0];
      const lastDogName = localStorage.dogURL.split(',')[1];
      console.log(lastDogName);
      this.setState({
        message: lastDogURL,
        name: lastDogName,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.message);
    if (nextState.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    let raca = this.state.message.split('/')[4];
    // alert(raca)
  }

  saveDog() {
    console.log(this.state);
    const newArr = [this.state.message, this.state.name];
    localStorage.setItem('dogURL', newArr);
    alert('doguinho salvo...')
  }
  chamaDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            message: result.message,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }
  // trataRaca() {
  //   const raca = this.state.message;
  //   let terrier = '';
  //   if(raca.includes('terrier')) {
  //     terrier = raca
  //     console.log(terrier)
  //     return terrier;
  //   }

  // }
  render() {
    const { error, isLoaded, message, name } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="App">
          <div>
            <img src={message} alt="doguinho" />
          </div>
          <button onClick={this.chamaDog}>Doguinho</button>
      <h1>{name}</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div>
            <img src={message} alt="doguinho" />
            <p>{this.state.name} </p>
          </div>
          <div>
            <input
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <button onClick={this.saveDog}>Salva Doguinho</button>
            <button onClick={this.chamaDog}>Doguinho</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
