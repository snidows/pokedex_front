import { PokeTeam, PokemonData } from "../../entities/pokemonTeams";
import { PokeIcon } from "../PokeIcon";
import { Container, NameDiv, PokemonAvatarContainer } from "./styles";

export const PokeTeamComponent = ({
  teamName,
  teamList,
}: {
  teamName: string;
  teamList: PokeTeam[];
}) => {
  return (
    <Container>
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
