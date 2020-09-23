import { Action } from '@ngrx/store';
import { PokemonSelected } from '../models/pokedex.model';

export enum PokemonSelectedTypes {
    ADD_ITEM = '[POKEDEX] Add Item',
}

export class AddItemAction implements Action {
    readonly type = PokemonSelectedTypes.ADD_ITEM;
    constructor(public payload: PokemonSelected) { }
}

export type PokemonAction = AddItemAction;