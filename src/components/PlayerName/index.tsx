import { BtnInputAction, Container, TextDiv, TextInput } from "./styles";

export const PlayerNameComponent = ({
  action,
  getName,
}: {
  action: Function;
  getName: Function;
}) => {
  return (
    <Container>
      <TextDiv>Qual seu Nome Jogador ?</TextDiv>
      <TextInput onChange={(e) => {getName(e.target.value)}} />
      <BtnInputAction onClick={() => {action()}}>AVANÇAR</BtnInputAction>
    </Container>
  );
};
