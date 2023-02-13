import styled from "styled-components";
import { colors } from "../../shared/colors";
export const Container = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-width: 12px;
  text-align: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  color: ${colors.black_light};
  background-color: ${colors.white_pure};
  border-radius: 16px;
  margin: 10px;
  padding:10px;
`;

export const Header = styled.div`
  height: 10%;
  width: 100%;
  font-size: 18px;
  text-align: right;

`;

export const Center = styled.div`
  /* height: 80%; */
  width: 100%;
`;

export const Avatar = styled.img`
  height: 140px;
  width: 140px;
`;

export const Boton = styled.div`
  height: 20%;
  width: 100%;
  font-size: 32px;
  text-align: center;

`;
