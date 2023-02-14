import { useState } from "react";
import { PokemonDTO } from "../../../entities/pokemonList";

export const useTimeController = () => {
  const [name, setName] = useState<string>("");
  const [playerName, setPlayerName] = useState<null | string>("lucas");
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
    console.log(teamMembersList);
  };

  const setPlayerNameAction = () => {
    setPlayerName(name);
  };

  const setCreatingTimeOn = () => {
    setCreatingTime(true);
  };
  const setCreatingTimeOff = () => {
    setCreatingTime(false);
  };

  const saveTime = () => {
    if (existingTeam) {
      console.log("atualizar time");
    } else {
      console.log("salvar um novo");
    }
  };

  const listTimes = () => {
    fetch("api buscar os dados de todos os times e plotar na tela");
  };

  const atualizarTimes = () => {
    //vai receber o comando de qual time e, e iniciar a reconfiguracao do mesmo
  };

  const deleteTime = () => {
    //vai receber o comando de qual time e, e deletar o registro do mesmo
  };

  return {
    name,
    playerName,
    setName,
    setPlayerNameAction,
    creatingTime,
    setCreatingTimeOn,
    setCreatingTimeOff,
    pushOrRemovePokemonToTeam,
    teamMembersList,
  };
};
