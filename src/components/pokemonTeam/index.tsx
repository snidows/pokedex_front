import { PokeTeam } from "../../entities/pokemonTeams";
import { PokeIcon } from "../PokeIcon";
import { Container, NameDiv, PokemonAvatarContainer } from "./styles";

export const PokeTeamComponent = ({
  teamName,
  teamList,
  action
}: {
  teamName: string;
  teamList: PokeTeam[];
  action:Function
}) => {
  return (
    <Container onClick={()=>action()}>
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
    </Container>
  );
};
