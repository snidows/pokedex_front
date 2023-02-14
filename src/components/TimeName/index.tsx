import { BtnInputAction, Container, TextDiv, TextInput } from "./styles";

export const TimeNameComponent = ({
  action,
  setNameTeam
}: {
  action: Function;
  setNameTeam: Function;
}) => {


  return (
    <Container>
      <TextDiv>Qual o nome do Time?</TextDiv>
      <TextInput
        onChange={(e) => {
          setNameTeam(e.target.value);
        }}
      />
      <BtnInputAction
        onClick={() => {
          action();
        }}
      >
        AVANÇAR
      </BtnInputAction>
    </Container>
  );
};
