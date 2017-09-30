import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubProvider {

    apiLink:any = "https://api.github.com/users/"

    constructor(public http: Http) {}

    buscarUsuario(usuario:string){
        return new Promise((resolve, reject)=> {
          var link:string = this.apiLink + usuario
          this.http.get(link).map(res=>res.json()).subscribe(
            (data) => {
              resolve(data)
            },
            (error) => {
              reject("Error: "+ error)
            })
    })}

    cargarRepos(usuario:string){
      return new Promise((resolve, reject)=> {
        var link:string = this.apiLink + usuario + "/repos"
        this.http.get(link).map(res=>res.json()).subscribe(
          (data) => {
            resolve(data)
          },
          (error) => {
              reject("Error: "+ error)
          })
    })}
}
