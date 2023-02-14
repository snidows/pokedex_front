import {
  ActionDiv,
  ButtonComponent,
  Container,
  MenuDiv,
  MenuDivHeader,
} from "./styles";
import { ModalComponent } from "../../components/modal";
import { useState } from "react";
import { PlayerNameComponent } from "../../components/PlayerName";
import { PokedexView } from "./views/pokedex";
import { TimeManagerPage } from "./views/timeManager";
import { MenuPokedexComponent } from "../../components/MenuPokedex";

export const PokeDexPage = (): JSX.Element => {
  const [action, setAction] = useState<string>("");
  const [playerName, setPlayerName] = useState<string | null>(null);
  const renderActionMenu = (action: string) => {
    if (action === "listar_pokemons") return <PokedexView />;
    else if (action === "listar_times") {
      return (
        <>
          <button>clica aqui</button>
        </>
      );
    } else if (action === "criar_times") {
      return <TimeManagerPage />;
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
