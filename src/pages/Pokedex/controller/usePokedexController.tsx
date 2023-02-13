import { useEffect, useState } from "react";
import { PokeIcon } from "../../../components/PokeIcon";
import {
  PokemonDTO,
  PokemonIndices,
  PokemonListResult,
  PokemonListUnit,
} from "../../../entities/pokemonList";

export const usePokedexController = () => {
  const [pokemonIcons, setPokemonIcons] = useState<JSX.Element[]>([]);

  const processListPokemons = async () => {
    const data = await fetch(process.env.REACT_APP_POKEMON_LIST as string);

    if (data.ok) {
      const list: JSX.Element[] = [];
      const result_data = (await data.json()) as PokemonListResult;

      result_data.results.forEach(async (pokemon: PokemonListUnit) => {
        const avatarUrl = await getAvatarUrlByPokemonName(pokemon.name);
        const pokemonResult = await fetch(pokemon.url).then(async response=>{
          if(response.ok){
            return await response.json() as PokemonDTO
          }else return null
        });
        if(pokemonResult) console.log(pokemonResult)
        if (avatarUrl)
          list.push(
            <PokeIcon
              avatarUrl={avatarUrl}
              name={pokemon.name}
              id="#001"
              key={`poke-name-${pokemon.name}`}
            />
          );
        setPokemonIcons(list);
      });
    }
  };

  const getAvatarUrlByPokemonName = async (
    name: string
  ): Promise<string | null> => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (data.ok) {
      const result_data = await data.json();
      return result_data.sprites.other["official-artwork"].front_default;
    } else return null;
  };

  useEffect(() => {
    if (pokemonIcons.length !== 0) return;
    processListPokemons();
  }, [pokemonIcons]);

  return { pokemonIcons };
};
