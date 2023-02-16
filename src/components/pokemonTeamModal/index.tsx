import { AiOutlineArrowLeft } from "react-icons/ai";
import { PokeTeam } from "../../entities/pokemonTeams";
import { PokeIcon } from "../PokeIcon";
import {
  Container,
  Header,
  LineDiv,
  NameDiv,
  PokemonAvatarContainer,
} from "./styles";
import { BtnHigh } from "../btnHigh";

export const PokeTeamModalComponent = ({
  teamName,
  teamList,
  actionDelete,
  actionCloseModal
}: {
  teamName: string;
  teamList: PokeTeam[];
  actionDelete: any;
  actionCloseModal: any;
}) => {
  return (
    <Container>
      <Header>
        <AiOutlineArrowLeft
          size={"30px"}
          onClick={() => actionCloseModal.current()}
        />
      </Header>
      <LineDiv>
        <NameDiv>{teamName}</NameDiv>
        <PokemonAvatarContainer>
          {teamList.map((pokemonName) => {
            return (
              <PokeIcon
                action={() => {}}
                avatarUrl={pokemonName.avatarUrl}
                checked={false}
                id={pokemonName.id}
                name={pokemonName.name}
                key={`${Math.random}_${pokemonName.name}`}
              />
            );
          })}
        </PokemonAvatarContainer>
      </LineDiv>
      <LineDiv>
        <BtnHigh action={() => actionDelete()} text="Deletar" />
      </LineDiv>
    </Container>
  );
};
