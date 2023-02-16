import { useEffect, useRef, useState } from "react";
import { PokeTeam, PokeTeamsDTO } from "../../../entities/pokemonTeams";
import { PokeTeamModalComponent } from "../../../components/pokemonTeamModal";
export const useTeamListController = (playerName: string) => {
  const [teams, setTeams] = useState<null | PokeTeamsDTO[]>(null);

  const [selectedTeam, setSelectedTeam] = useState<null | PokeTeamsDTO>(null);
  const [openTeam, setOpenTeam] = useState<boolean>(false);
  const [componentModal, setComponenetModal] = useState<JSX.Element>(<></>);

  const listTimesByPlayerName = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `${process.env.REACT_APP_POKEMON_API as string}?playerName=${playerName}`,
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

  const renderPokeTeamModalComponent = () => {
    if (selectedTeam) {
      setComponenetModal(
        <PokeTeamModalComponent
          actionCloseModal={closeModalRef}
          actionDelete={deleteTeam}
          teamList={selectedTeam.teamMembers}
          teamName={selectedTeam.timeName}
          key={`${Math.random()}`}
        />
      );
    }
  };

  const openTeamModal = (team: PokeTeamsDTO) => {
    if (openTeam === false) {
      setSelectedTeam(team);
      setOpenTeam(true);
    }
  };

  useEffect(() => {
    if (selectedTeam) {
      renderPokeTeamModalComponent();
    }
  }, [selectedTeam]);

  const closeTeamModal = () => {
    setOpenTeam(false);
    setSelectedTeam(null);
  };

  const closeModalRef = useRef(closeTeamModal);

  const removeSelectedTeamDeleted = () => {
    const copyTeams = teams;
    if (teams) {
      teams.forEach((team, index) => {
        if (team === selectedTeam) copyTeams?.splice(index, 1);
      });
    }
    setTeams(copyTeams);
  };

  const deleteTeam = () => {
    if (selectedTeam) {
      const id = selectedTeam.id;
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };

      fetch(
        `${process.env.REACT_APP_POKEMON_API as string}/${id},`,
        requestOptions
      ).then((result) => {
        if (result.ok) {
          removeSelectedTeamDeleted();
          closeTeamModal();
        }
      });
    } else {
      console.log("problemas ao deletar");
    }
  };

  const deleteTeamRef = useRef(deleteTeam);

  useEffect(() => {
    if (!teams) listTimesByPlayerName();
  }, [teams]);

  return {
    teams,
    openTeam,
    openTeamModal,
    closeTeamModal,
    componentModal,
    deleteTeamRef,
  };
};
