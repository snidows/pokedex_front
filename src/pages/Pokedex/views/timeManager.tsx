import { NavigatorPokedex } from "../../../components/NavigatorPokedex";
import { TimeNameComponent } from "../../../components/TimeName";
import { PokemonDTO } from "../../../entities/pokemonList";
import { useTimeController } from "../controller/useApiController";
import { usePokedexController } from "../controller/usePokedexController";
import { ActionDivPokemons } from "../styles";

export const TimeManagerPage = () => {
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
    saveTime,
    setTeamName,
    listTimes,
  } = useTimeController();
  const {
    nextPageSelect,
    backPageSelect,
    pageNumber,
    renderIconPokemons,
    pokemonsData,
  } = usePokedexController();
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
          <button
            onClick={() => {
              saveTime();
            }}
          >
            SAVE
          </button>
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
          setNameTeam={setTeamName}
        />
      )}
    </>
  );
};
