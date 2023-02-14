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

  const [pokemonsData, setPokemonsData] = useState<PokemonDTO[]>([]);

  const [pokemonCard, setPokemonCard] = useState<JSX.Element>(<></>);

  const getPokemonsAndSetlist = async (pageFindUrl: string) => {
    const response = await fetch(pageFindUrl);

    if (!response.ok) return;
    const pokemonsListResult = (await response.json()) as PokemonListResult;

    setBackPage(pokemonsListResult.previous);
    setNextPage(pokemonsListResult.next);

    setPokemonList(pokemonsListResult.results);
  };

  useEffect(() => {
     getDataPokemon().then(pokeData=>{
      setPokemonsData(pokeData);
     })    
  }, [pokemonList]);

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

  const closeCardModal = () => {
    setShowCardPokemon(false);
  };

  const actionClickPokemonCard = (dataPokemon: PokemonDTO) => {
    setPokemonCard(
      <PokemonCard
        actionCard={closeCardModal}
        avatar={dataPokemon.sprites.other["official-artwork"].front_default}
        id={dataPokemon.id}
        name={dataPokemon.name}
        pokeTypes={dataPokemon.types}
        heigth={dataPokemon.height}
        weight={dataPokemon.weight}
        ability={dataPokemon.abilities}
      />
    );
    setShowCardPokemon(true);
  };

  const getDataPokemon = async (): Promise<PokemonDTO[]> => {
    const pokemonData: PokemonDTO[] = [];
    for (let i = 0; i < pokemonList.length; i++) {
      const dataPokemon = (await (
        await fetch(pokemonList[i].url)
      ).json()) as PokemonDTO;

      pokemonData.push(dataPokemon);
    }
    return pokemonData;
  };

  const renderIconPokemons = (
    avatarUrl: string,
    id: number,
    name: string,
    key: string,
    action: Function
  ) => {
    return (
      <PokeIcon
        avatarUrl={avatarUrl}
        id={id}
        name={name}
        key={key}
        action={() => action()}
      />
    );
  };

  useEffect(() => {
    if (pokemonList.length === 0) getPokemonsAndSetlist(nextPage as string);
  }, [pokemonList]);

  return {
    nextPageSelect,
    backPageSelect,
    pageNumber,
    showCardPokemon,
    pokemonCard,
    renderIconPokemons,
    pokemonsData,
    actionClickPokemonCard
  };
};
