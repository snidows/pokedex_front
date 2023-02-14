import {
  ActionDiv,
  ActionDivPokemons,
  ButtonComponent,
  Container,
  MenuDiv,
  MenuDivHeader,
} from "./styles";
import { usePokedexController } from "./controller/usePokedexController";
import { NavigatorPokedex } from "../../components/NavigatorPokedex";
import { ModalComponent } from "../../components/modal";
import { useEffect, useState } from "react";
import { PlayerNameComponent } from "../../components/PlayerName";

export const PokeDexPage = (): JSX.Element => {
  const {
    pokemonIcons,
    nextPageSelect,
    backPageSelect,
    pageNumber,
    showCardPokemon,
    pokemonCard,
  } = usePokedexController();
  const [name, setName] = useState<string>("");
  const [playerName, setPlayerName] = useState<null | string>(null);
  const [action, setAction] = useState<string>("");

  const [actionComponent, setActionComponent] = useState<JSX.Element>(<></>);

  const setPlayerNameAction = () => {
    setPlayerName(name);
  };

  useEffect(() => {
    switch (action) {
      case "listar_pokemons":
        break;

      default:
        break;
    }
  }, [action]);

  return (
    <Container>
      <MenuDiv>
        <MenuDivHeader>Pokédex</MenuDivHeader>
        {playerName ? <>Player: {playerName}</> : <></>}
        {playerName ? (
          <>
            <ButtonComponent onClick={() => setAction("listar_pokemons")}>
              Listar Pokemons
            </ButtonComponent>
            <ButtonComponent onClick={() => setAction("criar_times")}>
              Criar Times
            </ButtonComponent>
            <ButtonComponent onClick={() => setAction("listar_times")}>
              Listar Times
            </ButtonComponent>
          </>
        ) : (
          <></>
        )}
      </MenuDiv>
      <ModalComponent open={showCardPokemon} component={pokemonCard} />
      <ActionDiv>
        {playerName ? (
          <>
            <ActionDivPokemons>{pokemonIcons}</ActionDivPokemons>
            <NavigatorPokedex
              page={pageNumber}
              next={nextPageSelect}
              back={backPageSelect}
            ></NavigatorPokedex>
          </>
        ) : (
          <PlayerNameComponent action={setPlayerNameAction} getName={setName} />
        )}
      </ActionDiv>
    </Container>
  );
};
