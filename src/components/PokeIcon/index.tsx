import { Boton, Avatar, Container, Header, Center } from "./styles";

export const PokeIcon = ({
  name,
  id,
  avatarUrl,
  action
}: {
  name: string;
  id: number;
  avatarUrl: string;
  action:Function
}): JSX.Element => {
  return (
    <Container onClick={()=>action()}>
      <Header>{id}</Header>
      <Center>
        <Avatar src={avatarUrl} />
      </Center>
      <Boton>{name}</Boton>
    </Container>
  );
};
