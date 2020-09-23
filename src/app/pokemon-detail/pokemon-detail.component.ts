import { Component, OnInit } from '@angular/core';
import { StorePokemonInfoService } from '../store-pokemon-info.service';
import { HttpService } from '../http.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ComparationPokemonDetailsComponent } from '../comparation-pokemon-details/comparation-pokemon-details.component';
import { FillListService } from '../fill-list.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  idPokemon;
  urlPokemon;
  urlSecondPokemon;
  imgPokemon;
  compare = false;
  value = "Compare to";
  modalRef: BsModalRef;
  pokemonSelected: any;
  stats;
  searchText = '';
  pokemonList;

  constructor(private pokemon: StorePokemonInfoService, private json: HttpService,
    private bsModalRef: BsModalRef, private modalService: BsModalService, private list: FillListService) { }

  ngOnInit(): void {
    if (!this.pokemon.isStored(this.idPokemon)) {
      this.json.getJson(this.urlPokemon).subscribe((res: any) => {
        this.pokemon.storeInfo(res);
        this.pokemonSelected = this.pokemon.getPokemon();
        this.stats = this.pokemon.getStats(this.pokemonSelected.stats);
      });
    } else {
      this.pokemonSelected = this.pokemon.getPokemon();
      this.stats = this.pokemon.getStats(this.pokemonSelected.stats);
    }
    this.pokemonList = this.list.getList();
  }

  doHide() {
    this.bsModalRef.hide();
  }

  changeValue() {
    this.compare = true;
  }

  changeValueFalse() {
    this.compare = false;
  }

  pokemonClicked(e) {
    this.searchText = e.currentTarget.textContent.trim();
  }

  openModal() {
    this.urlSecondPokemon = this.list.getPokemon(this.searchText);
    if (this.urlSecondPokemon) {
      this.bsModalRef.hide();
      this.modalRef = this.modalService.show(ComparationPokemonDetailsComponent, {
        initialState: {
          firstPokemon: this.pokemonSelected,
          img: this.imgPokemon,
          stats: this.stats,
          secondPokemon: this.urlSecondPokemon
        }
      });
    }
  }
}
