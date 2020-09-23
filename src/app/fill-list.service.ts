import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FillListService {
  pokemonItems: any;
  listPokemon: Array<any> = [];
  pokemonSelected: any;
  nameList: Array<string> = [];
  constructor() {

  }

  getPokemon(name: string) {
    let index = 0;
    while (index < this.listPokemon.length) {
      if (this.listPokemon[index].name == name.toLowerCase()) {
        this.pokemonSelected = {
          id: index + 1,
          url: this.listPokemon[index].url
        }
        return this.pokemonSelected;
      }
      index++;
    }
  }

  getList() {
    return this.nameList;
  }

  storeInfo(pokemon: any) {
    for (let pkmn of pokemon) {
      this.nameList = this.nameList.concat(pkmn.name);
    }
    this.listPokemon = this.listPokemon.concat(pokemon);
  }
}
