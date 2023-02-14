import { NavigatorPokedex } from "../../../components/NavigatorPokedex";
import { usePokedexController } from "../controller/usePokedexController";
import { ActionDivPokemons } from "../styles";

export const PokedexView = () => {
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
};
