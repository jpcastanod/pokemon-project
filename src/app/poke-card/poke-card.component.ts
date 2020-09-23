import { Component, OnInit, Input } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})

export class PokeCardComponent implements OnInit {
  @Input('name') pokemonName: string;
  @Input('img') imgUrl: string;
  @Input('url') urlPokemon: string;
  @Input('id') idPokemon: number;
  modalRef: BsModalRef;
  pokemonSelected: object;


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  openModal() {
    this.modalRef = this.modalService.show(PokemonDetailComponent, {
      initialState: {
        idPokemon: this.idPokemon,
        urlPokemon: this.urlPokemon,
        imgPokemon: this.imgUrl
      }
    });
  }
}
