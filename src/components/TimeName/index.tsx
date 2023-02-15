import { useEffect, useState } from "react";
import { BtnInputAction, Container, TextDiv, TextInput } from "./styles";

export const TimeNameComponent = ({ action }: { action: Function }) => {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    return () => {
      setName(null);
    };
  }, []);
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
