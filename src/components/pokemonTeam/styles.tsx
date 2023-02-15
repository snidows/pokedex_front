import styled from "styled-components";
import { colors } from "../../shared/colors";

export const Container = styled.div`
  display: flex;
  height: 150px;
  width: 95%;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: thin;
  border: solid;
  margin-top:15px;
  border-color: ${colors.red_base_light};
  gap: 30px;
  justify: center;
`;

export const NameDiv = styled.div`
  margin: 50px;
  width: 20%;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const PokemonAvatarContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap:20px;
`;
