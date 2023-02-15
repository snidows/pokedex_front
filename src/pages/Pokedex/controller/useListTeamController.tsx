import { useEffect, useState } from "react";
import {
  PokeTeam,
  PokeTeamsDTO,
  PokemonData,
} from "../../../entities/pokemonTeams";
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
        resultTeams.forEach((team_element, index) => {
          const pokemons_teams: PokeTeam[] = [];
          //aqui eu tive de deixar any, because o tipo que o banco salva, e um JSON stringyfied, ai preciso converter para o objeto novamente
          team_element.teamMembers.forEach((poke: any) => {
            pokemons_teams.push(JSON.parse(poke) as PokeTeam);
          });
          resultTeams[index].teamMembers = pokemons_teams;
        });
        setTeams(resultTeams);
      } else console.log("nao foi possivel buscar os times");
    });
  };

  useEffect(() => {
    if (!teams) listTimesByPlayerName();
    console.log(teams);
    // else {
    //   getPokemonDataByPokemonNameList();
    // }
  }, [teams]);

  return { teams };
};
