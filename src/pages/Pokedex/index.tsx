import {
  ActionDiv,
  ButtonComponent,
  Container,
  MenuDiv,
  MenuDivHeader,
} from "./styles";
import { useState } from "react";
import { PlayerNameComponent } from "../../components/PlayerName";
import { PokedexView } from "./views/pokedex";
import { TimeManagerPage } from "./views/timeManager";
import { MenuPokedexComponent } from "../../components/MenuPokedex";
import { ListTeamPage } from "./views/listTeams";

export const PokeDexPage = (): JSX.Element => {
  const [action, setAction] = useState<string>("");
  const [playerName, setPlayerName] = useState<string | null>(null);

  const renderActionMenu = (action: string) => {
    if (action === "listar_pokemons") return <PokedexView />;
    else if (action === "listar_times") {
      if (!playerName) return <>Nao foi possivel setar o nome do jogador!!!</>;
      return <ListTeamPage playerName={playerName} />;
    } else if (action === "criar_times") {
      if (!playerName) return <>Nao foi possivel setar o nome do jogador!!!</>;
      return <TimeManagerPage playerName={playerName} />;
    }
  };

  return (
    <Container>
      <MenuDiv>
        <MenuDivHeader>Pokédex</MenuDivHeader>
        {playerName ? <>Player: {playerName}</> : <></>}
        {playerName ? <MenuPokedexComponent action={setAction} /> : <></>}
      </MenuDiv>
      <ActionDiv>
        {playerName ? (
          renderActionMenu(action)
        ) : (
          <PlayerNameComponent action={setPlayerName} />
        )}
      </ActionDiv>
    </Container>
  );
};
