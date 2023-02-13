import { useEffect, useState } from "react";
import { PokeIcon } from "../../components/PokeIcon";
import {
  ActionDiv,
  Container,
  MenuDiv,
  MenuDivHeader,
  MenuDivSearch,
} from "./styles";
import { usePokedexController } from "./controller/usePokedexController";

export const PokeDexPage = (): JSX.Element => {
  const {pokemonIcons} = usePokedexController();
  return (
    <Container>
      <MenuDiv>
        <MenuDivHeader>Pokédex</MenuDivHeader>
        <MenuDivSearch></MenuDivSearch>
      </MenuDiv>
      <ActionDiv>{pokemonIcons}</ActionDiv>
    </Container>
  );
};
