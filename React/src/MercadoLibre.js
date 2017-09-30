import React, { Component } from 'react';
import axios from 'axios';
const url = "https://api.mercadolibre.com/sites/MCO/search?q=";
var nombreArticulo = '';

class MercadoLibre extends Component {
    

  constructor(props){
    /* Darle accesibilidad a todo el programa para dichas variables */
    super(props)
    this.state= {
        urlImagen : ''
    }
    /* Bind: enlazar referencia (this) a función que se ejecutará */
    this.obtenerDatos = this.obtenerDatos.bind(this)
  }

  obtenerDatos(event){

    // Capturar nombre de artículo a buscar
    nombreArticulo = document.getElementById('buscar').value;
    
    axios.get(url+nombreArticulo)
    .then( function(response){
      console.log('Datos artículo ', response.data);

      var articulos = response.data.results;
      
      for(var i in articulos)
      {        
           var nombre = articulos[i].title;
           var imagen = articulos[i].thumbnail;
           var precio = articulos[i].price;
           var vendidos = articulos[i].sold_quantity;
           var condicion = articulos[i].condition;
           var enlace = articulos[i].permalink;

           var contenido = "<div style='height:105px'><img src="+imagen+">"+nombre+ "<br/> <b>Precio: $</b>" +precio
           + "<br/> <b>Vendidos: </b>" +vendidos + "<br/> <b>Condición: </b>" +condicion
           + "<br/> <b></b><a href="+enlace+">COMPRAR</a></b>"+"</div>";
            
           document.getElementById("resultados").innerHTML += contenido;

      }
    
    } )
    .catch( function(error){

    } )
  }

  render(){
    return(
      <div> <br/><br/><br/><br/>
        <label style={{fontSize:30}}>Artículo a buscar:</label> <br/> <input type="text" name="buscar" id="buscar" placeholder="Nombre de artículo a buscar" size="50" />
        <br/><br/>
        <button onClick={this.obtenerDatos}>BUSCAR</button>
        <br/><br/>
        <div id="resultados"><h1>LISTA DE RESULTADOS</h1></div>
      </div>
    )
  }

}

export default MercadoLibre;