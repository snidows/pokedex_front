import { useEffect, useState } from "react";
import {
  PokemonDTO,
  PokemonListResult,
  PokemonListUnit,
} from "../../../entities/pokemonList";
import { PokeIcon } from "../../../components/PokeIcon";

export const usePokedexController = () => {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [backPage, setBackPage] = useState<null | string>(null);
  const [nextPage, setNextPage] = useState<null | string>(
    process.env.REACT_APP_POKEMON_LIST as string
  );

  const [pokemonList, setPokemonList] = useState<PokemonListUnit[]>([]);
  const [pokemonIcons, setPokemonIcons] = useState<JSX.Element[]>([]);

  const getPokemonsAndSetIcons = async (pageFindUrl: string) => {
    const pokeList: any = {};

    const response = await fetch(pageFindUrl);

    if (!response.ok) return;

    const pokemonsListResult = (await response.json()) as PokemonListResult;

    setBackPage(pokemonsListResult.previous);
    setNextPage(pokemonsListResult.next);
    setPokemonList(pokemonsListResult.results);
  };

  const nextPageSelect = () => {
    if (nextPage) {
      getPokemonsAndSetIcons(nextPage);
      setPageNumber(pageNumber + 1);
    }
  };
  const backPageSelect = () => {
    if (backPage) {
      getPokemonsAndSetIcons(backPage);
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    if (nextPage) getPokemonsAndSetIcons(nextPage);
  }, []);

  const processIconPokemons = async () => {
    const cardIconsPokemons: JSX.Element[] = [];
    for (let i = 0; i < pokemonList.length; i++) {
      const dataPokemon = (await (
        await fetch(pokemonList[i].url)
      ).json()) as PokemonDTO;
      cardIconsPokemons.push(
        <PokeIcon
          avatarUrl={
            dataPokemon.sprites.other["official-artwork"].front_default
          }
          id={dataPokemon.id}
          name={dataPokemon.name}
          key={dataPokemon.name}
        />
      );
    }
    setPokemonIcons(cardIconsPokemons);
  };

  useEffect(() => {
    if (pokemonList.length > 19) processIconPokemons();
  }, [pokemonList]);

  return { pokemonIcons, nextPageSelect, backPageSelect,pageNumber };
};
