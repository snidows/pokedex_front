import { Navigate, useNavigate } from "react-router-dom";
import { BtnHigh } from "../../components/btnHigh";
import {
  BottonsContainer,
  Container,
  Header,
  TextContainer,
  TextHigh,
  TextLow,
} from "./styles";

export const InitialPage = (): JSX.Element => {
  const navigator=useNavigate()
  return (
    <Container>
      <Header>Centro Pokémon</Header>
      <TextContainer>
        <TextHigh>Bem vindo Treinador</TextHigh>
        <TextLow>O que gostaria de fazer ?</TextLow>
      </TextContainer>
      <BottonsContainer>
        <BtnHigh
          text="Pokédex"
          action={() => {
            return(navigator("/pokedex"));
          }}
        />
        <BtnHigh
          text="Gerenciar Times"
          action={() => {
            console.log("Gerencia Times");
          }}
        />
      </BottonsContainer>
    </Container>
  );
};
