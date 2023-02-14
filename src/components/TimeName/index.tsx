import { useState } from "react";
import { BtnInputAction, Container, TextDiv, TextInput } from "./styles";

export const TimeNameComponent = ({
  action,
}: {
  action: Function;
  getName: Function;
}) => {
  const [name, setName] = useState("");

  return (
    <Container>
      <TextDiv>Qual o nome do Time?</TextDiv>
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
