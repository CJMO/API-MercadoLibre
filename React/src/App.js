import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

 /* Props: propeidades/variables definidos por el sistema */
  constructor(props){
    /* Darle accesibilidad a todo el programa para dichas variables */
    super(props)
    this.state= {
      inputText : '',
      outputText: ''
    }
    /* Bind: enlazar referencia (this) a función que se ejecutará */
    this.cambiarTexto = this.cambiarTexto.bind(this)
  }

  cambiarTexto(event){
    var nombre = event.target.value
    this.setState('outputText': nombre)
    this.setState('inputText': nombre)
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">          
          <h1>Dojo React</h1>
        </div>
      </div>
    )
  }

}

export default App;