import { useState } from "react";
import { PokemonDTO } from "../../../entities/pokemonList";
import { PokeTeamDTO } from "../../../entities/pokemonApi";

export const useTimeController = (playerName: string) => {
  const [name, setName] = useState<string>("");
  const [teamName, setTeamName] = useState<null | string>(null);
  const [teamMembers, setTeamMembers] = useState<PokemonDTO[]>([]);
  const [teamMembersList, setTeamMembersList] = useState<string[]>([]);

  const [creatingTime, setCreatingTime] = useState<boolean>(false);
  const [existingTeam, setExistingTeam] = useState<number | null>(null);

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
        team.push(pokemon);
        setTeamMembers([...team]);
        teamList.push(pokemon.name);
        setTeamMembersList([...teamList]);
      }
    }
  };

  const setCreatingTimeOn = (nameTeam: string) => {
    if (nameTeam) setCreatingTime(true);
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
    const team: PokeTeamDTO = {
      playerName: playerName,
      teamMembers: teamMembersList,
      timeName: teamName,
    };

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

  const listTimesByPlayerName = (playerName: string) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `http://localhost:4444/pokedex/teams?playerName=${playerName}`,
      requestOptions
    ).then(async (result) => {
      if (result.status === 200) {
        console.log(await result.json());
      } else
        console.log("algum erro aconteceu e nao foi possivel criar o time");
    });
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
    listTimesByPlayerName,
    resetChoices,
  };
};
