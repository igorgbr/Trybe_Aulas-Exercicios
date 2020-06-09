import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Pictures from './Pictures';
import PropTypes from 'prop-types';
import PictureList from './PicturesList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Minha Lista de Componentes',
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <div className="main">
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value="Título Show" />
        </MyList>
        <PictureList>
          <Pictures
            height={200}
            src="https://image.freepik.com/fotos-gratis/imagem-macro-de-laranja-madura-na-mesa-de-madeira_1150-20092.jpg"
            alt="Logo da Trybe"
            legend={'Lista feita na Trybe'}
          />
        </PictureList>
      </div>
    );
  }
}

Pictures.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
};

Pictures.defaultProps = {
  height: 400,
};
export default App;
