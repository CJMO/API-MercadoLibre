import React, { Component } from 'react';
import axios from 'axios';
const url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

class Nasa extends Component {

  constructor(props){
    /* Darle accesibilidad a todo el programa para dichas variables */
    super(props)
    this.state= {
      urlImagen : ''
    }
    /* Bind: enlazar referencia (this) a función que se ejecutará */
    this.obtenerImagen = this.obtenerImagen.bind(this)
  }

  obtenerImagen(event){
    var self = this
    axios.get(url)
    .then( function(response){
      console.log('URL imágen ', response.data.url);
      self.setState({urlImagen:response.data.url})
    } )
    .catch( function(error){

    } )
  }

  render(){
    return(
      <div>
        <img src={this.state.urlImagen} />
        <br/>
        <button onClick={this.obtenerImagen}>OBTENER IMÁGEN</button>
      </div>
    )
  }

}

export default Nasa;
