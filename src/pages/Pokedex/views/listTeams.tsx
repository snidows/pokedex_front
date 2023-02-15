import { PokeTeamComponent } from "../../../components/pokemonTeam";
import { useTeamListController } from "../controller/useListTeamController";
import { ContainerPageListTeams } from "./styles";

export const ListTeamPage = ({ playerName }: { playerName: string }) => {
  const { teams } = useTeamListController(playerName);

  return (
    <ContainerPageListTeams>
      {teams ? (
        teams?.map((team) => {
          return (
            <PokeTeamComponent
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
