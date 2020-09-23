import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { FillListService } from './fill-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokemon';
  baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  extensionImgUrl = '.png'
  api: string;
  pokemons: any;
  noMorePokemons: boolean = false;
  searchText;

  constructor(private json: HttpService, private list: FillListService) { }

  ngOnInit() {
    var baseRoute = 'https://pokeapi.co/api/v2/pokemon/';
    this.getPokemons(baseRoute);
  }

  filter(search) {
    this.searchText = search;
  }

  pokemonSelected(event) {
    this.api = event;
  }

  getPokemons(api) {
    this.json.getJson(api).subscribe((res: any) => {
      this.list.storeInfo(res.results);
      if (!this.pokemons) {
        this.pokemons = res;
        this.pokemons.id = 0;

      }
      else {
        this.pokemons.results = this.pokemons.results.concat(res.results);
        this.pokemons.next = res.next;
        if (!this.pokemons.next) {
          this.noMorePokemons = true;
        }
      }
      this.pokemons.results.map((pkmn, index) => {
        pkmn.id = index + 1;
      })
    });
  }
}
