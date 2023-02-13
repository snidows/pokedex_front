import { Boton, Avatar, Container, Header, Center } from "./styles";

export const PokeIcon = ({
  name,
  id,
  avatarUrl,
}: {
  name: string;
  id: string;
  avatarUrl: string;
}): JSX.Element => {
  return (
    <Container>
      <Header>{id}</Header>
      <Center>
        <Avatar src={avatarUrl} />
      </Center>
      <Boton>{name}</Boton>
    </Container>
  );
};
