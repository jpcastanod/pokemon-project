import { PokemonSelectedTypes, PokemonAction } from '../actions/pokemon.actions';
import { PokemonSelected } from '../models/pokedex.model';


const initialState: Array<PokemonSelected> = [];

export function PokedexReducer(state: Array<PokemonSelected> = initialState, action: PokemonAction) {
    switch (action.type) {
        case PokemonSelectedTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}