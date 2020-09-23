import { StorePokemonInfoService } from '../store-pokemon-info.service';
import { HttpService } from '../http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparation-pokemon-details',
  templateUrl: './comparation-pokemon-details.component.html',
  styleUrls: ['./comparation-pokemon-details.component.css']
})
export class ComparationPokemonDetailsComponent implements OnInit {
  baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  extensionImgUrl = '.png'
  firstPokemon;
  img;
  secondPokemon;
  secondPokemonSelected;
  statsSecond;
  comparationStats;
  stats;
  constructor(private bsModalRef: BsModalRef, private pokemon: StorePokemonInfoService,
    private json: HttpService) { }

  ngOnInit(): void {
    if (!this.pokemon.isStored(this.secondPokemon.id)) {
      this.json.getJson(this.secondPokemon.url).subscribe((res: any) => {
        this.pokemon.storeInfo(res);
        this.buildPokemon();
      });
    }
    else {
      this.buildPokemon();
    }
  }


  buildPokemon() {
    this.secondPokemonSelected = this.pokemon.getPokemon();
    this.statsSecond = this.pokemon.getStats(this.secondPokemonSelected.stats);
    this.comparationStats = this.pokemon.joinStats(this.stats, this.statsSecond);
  }

  doHide() {
    this.bsModalRef.hide();
  }

}
