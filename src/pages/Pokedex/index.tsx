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
import { useTimeController } from "./controller/useApiController";
import { TimeNameComponent } from "../../components/TimeName";

export const PokeDexPage = (): JSX.Element => {
  const {
    nextPageSelect,
    backPageSelect,
    pageNumber,
    showCardPokemon,
    pokemonCard,
    renderIconPokemons,
    pokemonsData,
    actionClickPokemonCard,
  } = usePokedexController();

  const {
    name,
    playerName,
    setName,
    setPlayerNameAction,
    creatingTime,
    setCreatingTimeOn,
    setCreatingTimeOff,
    pushOrRemovePokemonToTeam,
    teamMembersList,
  } = useTimeController();

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
                () => actionClickPokemonCard(pokemons),
                null
              );
            })}
          </ActionDivPokemons>
          <NavigatorPokedex
            page={pageNumber}
            next={nextPageSelect}
            back={backPageSelect}
          />
        </>
      );
    else if (action === "listar_times") {
      return <>Listar Times</>;
    } else if (action === "criar_times") {
      return (
        <>
          {creatingTime ? (
            <>
              <ActionDivPokemons>
                {pokemonsData.map((pokemons) => {
                  return renderIconPokemons(
                    pokemons.sprites.other["official-artwork"].front_default,
                    pokemons.id,
                    pokemons.name,
                    pokemons.name,
                    () => pushOrRemovePokemonToTeam(pokemons),
                    teamMembersList
                  );
                })}
                
              </ActionDivPokemons>
              <NavigatorPokedex
                page={pageNumber}
                next={nextPageSelect}
                back={backPageSelect}
              />
              {/* <button onClick={() => setCreatingTimeOff()}>cancelar</button> */}
            </>
          ) : (
            <TimeNameComponent
              action={() => setCreatingTimeOn()}
              getName={() => console.log()}
            />
          )}
        </>
      );
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
