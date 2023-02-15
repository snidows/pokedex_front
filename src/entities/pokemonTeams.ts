import { PokemonDTO } from "./pokemonList";

export interface PokeTeamsDTO {
  id: number;
  timeName: string;
  playerName: string;
  teamMembers: PokeTeam[];
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}


export interface PokeTeamsInputDTO {
  timeName: string;
  playerName: string;
  teamMembers: PokeTeam[];
}

export interface PokeTeam{
  name:string;
  id:number;
  avatarUrl:string;
}

export interface PokemonData {
  [pokename: string]: PokemonDTO;
}