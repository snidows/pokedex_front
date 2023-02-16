import { ModalComponent } from "../../../components/modal";
import { PokeTeamComponent } from "../../../components/pokemonTeam";
import { useTeamListController } from "../controller/useListTeamController";
import { ContainerPageListTeams } from "./styles";

export const ListTeamPage = ({ playerName }: { playerName: string }) => {
  const { teams, openTeam, openTeamModal, componentModal } =
    useTeamListController(playerName);

  return (
    <ContainerPageListTeams onClick={()=>{}}>
      <ModalComponent component={componentModal} open={openTeam} />
      {teams ? (
        teams?.map((team) => {
          return (
            <PokeTeamComponent
              action={() => openTeamModal(team)}
              teamName={team.timeName}
              teamList={team.teamMembers}
              key={Math.random()}
            />
          );
        })
      ) : (
        <>Nao Ha dados</>
      )}
    </ContainerPageListTeams>
  );

  // <PokeTeamComponent
  // teamName=""
  // />;
};
