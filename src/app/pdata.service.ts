import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdataService {
  
  constructor(private http:HttpClient) { }
  getPokees(){
      return  this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
      // return this.http.get(`https://genius.p.rapidapi.com/artists/16775/songs`);
  }
  getMorePokees(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  }
}
