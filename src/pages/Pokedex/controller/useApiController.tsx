import { useState } from "react";
import { PokemonDTO } from "../../../entities/pokemonList";
import {
  PokeTeam,
  PokeTeamsDTO,
  PokeTeamsInputDTO,
} from "../../../entities/pokemonTeams";

export const useTimeController = (playerName: string) => {
  const [name, setName] = useState<string>("");
  const [teamName, setTeamName] = useState<null | string>(null);
  const [teamMembers, setTeamMembers] = useState<PokeTeam[]>([]);
  const [teamMembersList, setTeamMembersList] = useState<string[]>([]);

  const [creatingTime, setCreatingTime] = useState<boolean>(false);

  const pushOrRemovePokemonToTeam = (pokemon: PokemonDTO) => {
    //aplicar as regras
    if (teamMembersList.includes(pokemon.name)) {
      const team = teamMembers;
      const teamList = teamMembersList;
      const index = team.findIndex((poke) => poke.name === pokemon.name);
      team.splice(index, 1);
      teamList.splice(index, 1);
      setTeamMembers([...team]);
      setTeamMembersList([...teamList]);
    } else {
      if (teamMembers.length < 6) {
        const team = teamMembers;
        const teamList = teamMembersList;
        team.push({
          avatarUrl: pokemon.sprites.other["official-artwork"].front_default,
          id: pokemon.id,
          name: pokemon.name,
        });
        setTeamMembers([...team]);
        teamList.push(pokemon.name);
        setTeamMembersList([...teamList]);
      }
    }
  };

  const setCreatingTimeOn = (nameTeam: string) => {
    if (nameTeam) setCreatingTime(true);
    setTeamName(nameTeam)
  };

  const setCreatingTimeOff = () => {
    setCreatingTime(false);
    setTeamMembersList([]);
    setTeamMembers([]);
    setTeamName(null);
  };

  const saveTime = () => {
    
    //aplicar um toast para avisar que nao pode ter time com menos de 1 integrante
    if (teamMembersList.length < 1) return;
    if (!playerName) return;
    if (!teamName) return;

    const team: PokeTeamsInputDTO = {
      playerName: playerName,
      teamMembers: teamMembers,
      timeName: teamName,
    };
    console.log(team)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(team),
    };

    fetch("http://localhost:4444/pokedex/teams", requestOptions).then(
      (result) => {
        if (result.status === 201) resetChoices(true);
        else
          console.log("algum erro aconteceu e nao foi possivel criar o time");
      }
    );
  };

  const resetChoices = (result: boolean) => {
    if (result) {
      setCreatingTimeOff();
    }
  };

  return {
    name,
    playerName,
    setName,
    creatingTime,
    setCreatingTimeOn,
    setCreatingTimeOff,
    pushOrRemovePokemonToTeam,
    teamMembersList,
    saveTime,
    setTeamName,
    resetChoices,
  };
};
