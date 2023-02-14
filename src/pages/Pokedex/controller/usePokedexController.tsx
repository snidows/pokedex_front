import { useEffect, useState } from "react";
import {
  PokemonDTO,
  PokemonListResult,
  PokemonListUnit,
} from "../../../entities/pokemonList";
import { PokeIcon } from "../../../components/PokeIcon";
import { PokemonCard } from "../../../components/PokeCard";

export const usePokedexController = () => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [showCardPokemon, setShowCardPokemon] = useState<boolean>(false);

  const [backPage, setBackPage] = useState<null | string>(null);
  const [nextPage, setNextPage] = useState<null | string>(
    process.env.REACT_APP_POKEMON_LIST as string
  );
  const [pokemonList, setPokemonList] = useState<PokemonListUnit[]>([]);
  const [pokemonIcons, setPokemonIcons] = useState<JSX.Element[]>([]);
  const [pokemonCard, setPokemonCard] = useState<JSX.Element>(<></>);

  const getPokemonsAndSetlist = async (pageFindUrl: string) => {
    const response = await fetch(pageFindUrl);

    if (!response.ok) return;

    const pokemonsListResult = (await response.json()) as PokemonListResult;

    setBackPage(pokemonsListResult.previous);
    setNextPage(pokemonsListResult.next);
    setPokemonList(pokemonsListResult.results);
  };

  const nextPageSelect = () => {
    if (nextPage) {
      getPokemonsAndSetlist(nextPage);
      setPageNumber(pageNumber + 1);
    }
  };

  const backPageSelect = () => {
    if (backPage) {
      getPokemonsAndSetlist(backPage);
      setPageNumber(pageNumber - 1);
    }
  };

  const closeCardModal=()=>{
    setShowCardPokemon(false)
  }

  const actionClickPokemonCard = (dataPokemon: PokemonDTO) => {
    setPokemonCard(<PokemonCard
      actionCard={closeCardModal}
      avatar={dataPokemon.sprites.other["official-artwork"].front_default}
      id={dataPokemon.id}
      name={dataPokemon.name}
      pokeTypes={dataPokemon.types}
      heigth={dataPokemon.height}
      weight={dataPokemon.weight}
      ability={dataPokemon.abilities}
      />);
    setShowCardPokemon(true);
  };

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
          action={() => actionClickPokemonCard(dataPokemon)}
        />
      );
    }
    setPokemonIcons(cardIconsPokemons);
  };

  useEffect(() => {
    if (pokemonList.length === 0) getPokemonsAndSetlist(nextPage as string);
    else processIconPokemons();
  }, [pokemonList]);

  return {
    pokemonIcons,
    nextPageSelect,
    backPageSelect,
    pageNumber,
    showCardPokemon,
    pokemonCard
  };

};
