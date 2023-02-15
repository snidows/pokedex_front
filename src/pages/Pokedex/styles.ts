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
  overflow: hidden;
`;

export const MenuDiv = styled.div`
  height: 100vh;
  width: 15%;
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
  width: 84vw;
  margin: 0;
  padding: 0;
  display: flex; 
  flex-direction:column;
  border-radius:20px;
  align-items:center;
  justify-content:center;
  background-color: ${colors.white_black_light};
`;


export const ActionDivPokemons = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  /* background-color: red; */
`;

export const ButtonComponent = styled.button`
display: flex;
align-items:center;
justify-content:center;
height:3%;
width: 70%;
border: 0;
margin-top:10px;
border-radius:10px;
font-size:18px;
background: ${colors.white_black_light};
&:hover{
  background: ${colors.white_pure};
}
`;