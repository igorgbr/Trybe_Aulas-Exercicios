import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">

        <form>
          <fieldset>
            Nome: <input type="text" name="nome" onChange={this.changeHandler} /> <br />
            E-mail: <input type="email" name="email" onChange={this.changeHandler} />
            <br />
            <br />
            CPF: <input type="text" name="cpf" /> <br />
            Endereço: <input type="text" name="endereço" onChange={this.changeHandler} />
            <br />
            Cidade <input type="text" name="cidade" onChange={this.changeHandler} />
            Estado: <input type="text" name="estado" onChange={this.changeHandler} />
            <br />
            <br />
            <input type="radio" id="casa" />
            <label for="casa">casa</label>
            <input type="radio" id="apartamento" />
            <label for="apartamento">apartamento</label>
            <br />
            <br />
            Resumo do curriculo: <br />
            <textarea />
            <br />
            Descrição do cargo: <br />
            <textarea />
            <br />
            <button>Enviar</button> 
            <button>Limpar</button>

            
          </fieldset>
        </form>

      </div>
    );
  }

}

export default App;
