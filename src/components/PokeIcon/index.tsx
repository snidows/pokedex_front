import { Boton, Avatar, Container, Header, Center } from "./styles";

export const PokeIcon = ({
  name,
  id,
  avatarUrl,
  action,
  checked
}: {
  name: string;
  id: number;
  avatarUrl: string;
  action:Function,
  checked:boolean
}): JSX.Element => {
  return (
    <Container isSelected={checked} onClick={()=>action()} >
      <Header>{id}</Header>
      <Center>
        <Avatar src={avatarUrl} />
      </Center>
      <Boton>{name}</Boton>
    </Container>
  );
};
