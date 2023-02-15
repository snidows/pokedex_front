import { useEffect } from "react";
import { useTimeController } from "../controller/useApiController";
import { PokeTeamComponent } from "../../../components/pokemonTeam";

export const ListTeamPage = ({ playerName }: { playerName: string }) => {
  const { listTimesByPlayerName } = useTimeController(playerName);
  
  useEffect(() => {
    listTimesByPlayerName(playerName);
  }, []);

  return <PokeTeamComponent />;
};
