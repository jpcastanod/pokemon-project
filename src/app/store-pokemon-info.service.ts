import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { PokemonSelected } from './store/models/pokedex.model';
import { AddItemAction } from './store/actions/pokemon.actions';

@Injectable({
  providedIn: 'root'
})
export class StorePokemonInfoService {
  pokemonItems: any;
  pokemonSelected: object;
  newPokemon: PokemonSelected;
  stats = [];
  compareStats = [];
  constructor(private store: Store<AppState>) {
    this.store.subscribe((res) => {
      this.pokemonItems = res;
    })
  }

  isStored(id) {
    if (!this.pokemonItems.pokedex.length) {
      return false;
    }
    for (let index of this.pokemonItems.pokedex) {
      if (index.id == id) {
        this.pokemonSelected = index;
        return true;
      }
    }
    return false;
  }

  getPokemon() {
    return this.pokemonSelected;
  }

  storeInfo(pokemon: any) {
    this.newPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      abilities: pokemon.abilities,
      types: pokemon.types,
      stats: pokemon.stats
    }
    this.store.dispatch(new AddItemAction(this.newPokemon));
    this.pokemonSelected = this.newPokemon;
  }

  getStats(stats: any) {
    this.stats = [];
    for (let stat of stats) {
      this.stats.push({ name: stat.stat.name, value: stat.base_stat });
    }
    return this.stats;
  }

  joinStats(primaryStats, secondStats) {
    let statName;
    let firstValue;
    let SecondValue;
    let series: any = [];
    let statMain = [];
    primaryStats.map((stats, index) => {
      statName = stats.name;
      firstValue = stats.value;
      SecondValue = secondStats[index].value;
      series = [{ name: 'First Pokemon', value: stats.value }, { name: 'Second Pokemon', value: SecondValue }];
      statMain.push({ name: statName, series: series });
    })
    return statMain;
  }

}




//statMain.