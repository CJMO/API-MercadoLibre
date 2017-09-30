import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url = "https://api.mercadolibre.com/sites/MCO/search?q=";
  nombreArticulo : any;

  informacion :any = [];
  avatar_url : any;

  constructor(private http:Http) {

  }

  /*funcionClick(){
    console.log("Destruido");
    this._github.buscarUsuario("CJMO").then(respuesta=>{
      this.informacion = respuesta;
      console.log(this.informacion);
    })
  }*/

  buscar(){   
      // obtener datos de llamada a API
      this.informacion = this.http.get(this.url+this.nombreArticulo);      
      this.informacion
      .map(res => res.json())
      .subscribe(datos => {
        console.log("datos"+datos);

        datos = datos.results;
        for(var i in datos)
        {        
            var nombre = datos[i].title;
            var imagen = datos[i].thumbnail;
            var precio = datos[i].price;
            var vendidos = datos[i].sold_quantity;
            var condicion = datos[i].condition;
            var enlace = datos[i].permalink;

            var contenido = "<div style='height:105px'><img style='float: left;' src="+imagen+">"+nombre+ "<br/> <b>Precio: $</b>" +precio
            + "<br/> <b>Vendidos: </b>" +vendidos + "<br/> <b>Condición: </b>" +condicion
            + "<br/> <b></b><a href="+enlace+">COMPRAR</a></b>"+"</div>";
              
            document.getElementById("resultados").innerHTML += contenido;
        }

      })      
  }

}
