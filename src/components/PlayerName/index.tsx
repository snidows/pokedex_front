import { useState } from "react";
import { BtnInputAction, Container, TextDiv, TextInput } from "./styles";

export const PlayerNameComponent = ({ action }: { action: Function }) => {
  const [name, setName] = useState("");
  return (
    <Container>
      <TextDiv>Qual seu Nome Jogador ?</TextDiv>
      <TextInput
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <BtnInputAction
        onClick={() => {
          action(name);
        }}
      >
        AVANÇAR
      </BtnInputAction>
    </Container>
  );
};
