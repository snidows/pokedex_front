import styled from "styled-components";
import { colors } from "../../shared/colors";

export const Container = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-color: ${colors.red_base_light};
  border:solid;
  gap: 30px;
  justify: center;
  background:${colors.white_black_light}
`;

export const LineDiv = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  flex-direction:line;
  justify-content:center;
  margin-left:20px;
  margin-top:20px;
  margin-right:20px;
  margin-bottom:20px;
`;
export const Header = styled.div`
  width: 100%;
  height:100%;
  display:flex;
  flex-direction:line;
  justify-content:left;
  margin-left:50px;
  margin-top:20px;
`;
export const NameDiv = styled.div`
  margin: 50px;
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
