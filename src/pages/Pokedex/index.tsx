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
import { useState } from "react";
import { PlayerNameComponent } from "../../components/PlayerName";
import { useApiController } from "./controller/useApiController";

export const PokeDexPage = (): JSX.Element => {
  const {
    nextPageSelect,
    backPageSelect,
    pageNumber,
    showCardPokemon,
    pokemonCard,
    renderIconPokemons,
    pokemonsData,
    actionClickPokemonCard
  } = usePokedexController();

  const { name, playerName, setName, setPlayerNameAction } = useApiController();

  const [action, setAction] = useState<string>("");

  const renderActionMenu = (action: string) => {
    if (action === "listar_pokemons")
      return (
        <>
          <ActionDivPokemons>
            {pokemonsData.map((pokemons) => {
              return renderIconPokemons(
                pokemons.sprites.other["official-artwork"].front_default,
                pokemons.id,
                pokemons.name,
                pokemons.name,
                () => actionClickPokemonCard(pokemons)
              );
            })}
          </ActionDivPokemons>
          {/* <ActionDivPokemons>{pokemonIcons}</ActionDivPokemons> */}
          <NavigatorPokedex
            page={pageNumber}
            next={nextPageSelect}
            back={backPageSelect}
          ></NavigatorPokedex>
        </>
      );
    else if (action === "listar_times") {
      return <>Listar Times</>;
    } else if (action === "criar_times") {
      return <>Criar Times</>;
    }
  };
  return (
    <Container>
      <MenuDiv>
        <MenuDivHeader>Pokédex</MenuDivHeader>
        {playerName ? <>Player: {playerName}</> : <></>}
        {playerName ? (
          <>
            <ButtonComponent
              onClick={() => {
                setAction("listar_pokemons");
              }}
            >
              Pokédex
            </ButtonComponent>
            <ButtonComponent
              onClick={() => {
                setAction("criar_times");
              }}
            >
              Criar Times
            </ButtonComponent>
            <ButtonComponent
              onClick={() => {
                setAction("listar_times");
              }}
            >
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
          renderActionMenu(action)
        ) : (
          <PlayerNameComponent action={setPlayerNameAction} getName={setName} />
        )}
      </ActionDiv>
    </Container>
  );
};
