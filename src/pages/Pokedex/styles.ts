import styled from "styled-components";
import { colors } from "../../shared/colors";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: line;
  align-items:center;
  background-color: ${colors.red_base};
`;



export const MenuDiv = styled.div`
  height: 100vh;
  width: 20%;
  margin-left: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
export const MenuDivHeader = styled.div`
  width: 100%;
  color:${colors.white_pure};
  font-size:36px;
  display: flex;
  text-align:center;
  justify-content:center;
`;

export const MenuDivSearch = styled.input`
  width: 80%;
  border-radius:10px;
  margin-top: 20px;
  color:${colors.white_pure};
  font-size:20px;
  display: flex;
  border:0px;
  text-align:center;
  color: ${colors.black_light};
  background-color: ${colors.white_pure};
`;

export const ActionDiv = styled.div`
  height: 97vh;
  width: 79%;
  margin: 0;
  padding: 0;
  display: flex;
  border-radius:20px;
  /* flex-direction: column; */
  align-items:center;
  background-color: ${colors.white_black_light};
`;