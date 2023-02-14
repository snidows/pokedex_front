import styled from "styled-components";
import { colors } from "../../shared/colors";

export const Container = styled.div`
  height: 100vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.green_glass};
`;

export const HeaderDivContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: line;
  font-size: 36px;
  text-align: center;
  /* align-items:center; */
`;

export const HeaderDivLeft = styled.div`
  height: 15%;
  width: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 30px;
  gap: 20px;
  /* margin-left:20px;
margin-top:20px; */
  color: ${colors.white_pure};
  font-weight: bold;
`;
export const HeaderDivRight = styled.div`
  height: 15%;
  width: 50%;
  text-align: right;
  margin-right: 20px;
  margin-top: 15px;
  color: ${colors.white_pure};
  font-weight: bold;
`;

export const PokeballAvatar = styled.img`
  height: 28%;
  width: 16%;
  position: absolute;
  z-index: 0;
  margin-left: 23%;
  margin-top: 1%;
  opacity: 0.3;
`;

export const PokemonAvatar = styled.img`
  scale: 0.8;
  display: flex;
  position: absolute;
  top: 5vh;
  left: 37vw;
`;

export const MenuDivi = styled.div`
  height: 68%;
  width: 95%;
  border-radius: 26px;
  display: flex;
  justify-content: top;
  align: center;
  flex-direction: column;
  background: ${colors.white_pure};
`;

export const PokemonInfoDiv = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  margin-top: 22%;
  flex-direction: row;
  justify-content: center;
  align: center;
  gap: 5px;
  /* background: ${colors.red_base}; */
`;

export const PokemonTypeDiv = styled.div`
  text-align: center;
  width: 80px;
  background: ${(props) => props.color};
  font-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const PokemonStatusTree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 4px;
`;
export const InfoPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  gap: 4px;
  width: 180px;
  height: 120px;
  font-weight: 100;
  .header {
    font-weight: 600;
  }
`;

export const PokemonResumeDiv = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #2F2F2F; */
`;

export const PokemonStatusDiv = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
`;
export const PokemonStatusHeader=styled.div`
width: 100%;
margin-top:80px;
display: flex;
justify-content:center;
color: ${colors.green_glass};
font-weight:bold;
font-size:32px;
`

export const PokemonStatusContainer=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items:center;
color: ${colors.green_glass};
font-weight:bold;
font-size:32px;
`

export const PokemonStatusType=styled.div`
width: 10%;
display: flex;
justify-content:center;
color: ${colors.green_glass};
font-weight:bold;
font-size:22px;
`

export const PokemonStatusValue=styled.div`
width: 10%;
display: flex;
justify-content:center;
color: ${colors.black_light};
font-weight:bold;
font-size:22px;
`


export const PokemonStatusBar=styled.div`
width: 70%;
height: 20%;
border-radius:20px;
display: flex;
justify-content:center;
font-weight:bold;
font-size:32;
background: ${colors.green_glass};
`