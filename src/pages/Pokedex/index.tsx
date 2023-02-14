import {
  ActionDiv,
  ActionDivPokemons,
  ButtonComponent,
  Container,
  MenuDiv,
  MenuDivHeader,
  MenuDivSearch,
} from "./styles";
import { usePokedexController } from "./controller/usePokedexController";
import { NavigatorPokedex } from "../../components/NavigatorPokedex";
import { ModalComponent } from "../../components/modal";
import { useNavigate } from "react-router-dom";

export const PokeDexPage = (): JSX.Element => {
  const { pokemonIcons, nextPageSelect, backPageSelect, pageNumber,showCardPokemon,pokemonCard } =
    usePokedexController();
const navigator=useNavigate()
  return (
    <Container>
      <MenuDiv>
        <MenuDivHeader>Pokédex</MenuDivHeader>
        <MenuDivSearch></MenuDivSearch>
        <ButtonComponent onClick={()=>{navigator("/")}}>Voltar ao Menu</ButtonComponent>
      </MenuDiv>
      <ModalComponent
      open={showCardPokemon}
      component={pokemonCard}/>
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
