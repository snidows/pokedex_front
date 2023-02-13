import {
  ActionDiv,
  ActionDivPokemons,
  Container,
  MenuDiv,
  MenuDivHeader,
  MenuDivSearch,
} from "./styles";
import { usePokedexController } from "./controller/usePokedexController";
import { NavigatorPokedex } from "../../components/NavigatorPokedex";

export const PokeDexPage = (): JSX.Element => {
  const { pokemonIcons, nextPageSelect,backPageSelect, pageNumber } = usePokedexController();

  return (
    <Container>
      <MenuDiv>
        <MenuDivHeader>Pokédex</MenuDivHeader>
        <MenuDivSearch></MenuDivSearch>
      </MenuDiv>
      <ActionDiv>
        <ActionDivPokemons>{pokemonIcons}</ActionDivPokemons>
        <NavigatorPokedex
          page={pageNumber}
          next={nextPageSelect}
          back={backPageSelect}
        ></NavigatorPokedex>
      </ActionDiv>
    </Container>
  );
};
