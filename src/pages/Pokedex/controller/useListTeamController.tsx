import { useEffect, useState } from "react";
import { PokeTeamsDTO, PokemonData } from "../../../entities/pokemonTeams";
import { PokemonDTO } from "../../../entities/pokemonList";

export const useTeamListController = (playerName: string) => {
  const [teams, setTeams] = useState<null | PokeTeamsDTO[]>(null);

  const listTimesByPlayerName = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `http://localhost:4444/pokedex/teams?playerName=${playerName}`,
      requestOptions
    ).then(async (result) => {
      if (result.status === 200) {
        const resultTeams = (await result.json()) as PokeTeamsDTO[];
        setTeams(resultTeams);
      } else console.log("nao foi possivel buscar os times");
    });
  };

  // const getPokemonDataByPokemonNameList = () => {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   if (!teams) return;

  //   teams.forEach((team, index) => {
  //     team.teamMembers.forEach((pokemon) => {
  //       fetch(
  //         `${process.env.REACT_APP_POKEMON_GET as string}${pokemon}`,
  //         requestOptions
  //       ).then(async (result) => {
  //         if (result.status === 200) {
  //           const resultData = (await result.json()) as PokemonDTO;
  //         } else
  //           console.log("algum erro aconteceu e nao foi possivel criar o time");
  //       });
  //     });
  //   });
  // };

  useEffect(() => {
    if (!teams) listTimesByPlayerName();
    // else {
    //   getPokemonDataByPokemonNameList();
    // }
  }, [teams]);


  return {teams };
};
