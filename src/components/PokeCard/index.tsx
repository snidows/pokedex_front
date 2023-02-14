import { PokemonAbilities, PokemonMove, PokemonType } from "../../entities/pokemonList";
import { colors } from "../../shared/colors";
import {
  Container,
  HeaderDivContainer,
  HeaderDivLeft,
  HeaderDivRight,
  InfoPokemon,
  MenuDivi,
  PokeballAvatar,
  PokemonAvatar,
  PokemonInfoDiv,
  PokemonResumeDiv,
  PokemonStatusTree,
  PokemonTypeDiv,
} from "./styles";

import { AiOutlineArrowLeft } from "react-icons/ai";

export const PokemonCard = ({
  actionCard,
  name,
  id,
  avatar,
  pokeTypes,
  heigth,
  weight,
  ability,
}: {
  actionCard: Function;
  name: string;
  id: number;
  avatar: string;
  pokeTypes: PokemonType[];
  heigth: number;
  weight: number;
  ability: PokemonAbilities[];
}): JSX.Element => {
  const renderTypePokemonComponent = (type: string): JSX.Element => {
    return <PokemonTypeDiv key={type}>{type}</PokemonTypeDiv>;
  };
  return (
    <Container>
      <HeaderDivContainer>
        <HeaderDivLeft>
          <AiOutlineArrowLeft
            size={"30px"}
            color={colors.white_pure}
            onClick={() => actionCard()}
          />
          {name}
        </HeaderDivLeft>
        <PokeballAvatar
          src={"https://cdn-icons-png.flaticon.com/512/287/287221.png"}
        />
        <HeaderDivRight>{id}</HeaderDivRight>
      </HeaderDivContainer>
      <MenuDivi>
        <PokemonAvatar src={avatar} />

        <PokemonInfoDiv>
          {pokeTypes.map((pokemon) => {
            return renderTypePokemonComponent(pokemon.type.name);
          })}
        </PokemonInfoDiv>

        <PokemonStatusTree>
          <InfoPokemon>
            <div className="header">{weight/10} Kg</div>
            PESO
          </InfoPokemon>

          <InfoPokemon>
            <div className="header">{heigth/10} M</div>
            ALTURA
          </InfoPokemon>

          <InfoPokemon>
          {ability.map(abilidade=>{
            return <div className="header" key={abilidade.ability.name}>{abilidade.ability.name}</div>
          })}
            Habilidades
          </InfoPokemon>
        </PokemonStatusTree>

        {/* <PokemonResumeDiv>RESUMAO MAROTO AQUI</PokemonResumeDiv> */}
      </MenuDivi>
    </Container>
  );
};
