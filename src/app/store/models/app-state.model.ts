import { PokemonSelected } from './pokedex.model';

export interface AppState {
    readonly pokedex: Array<PokemonSelected>
}
