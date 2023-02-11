import styled from "styled-components";
import { colors } from "../../shared/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: ${colors.white_pure};
`;
export const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.red_base};
  color: ${colors.white_pure};
  text-align: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
`;

export const TextContainer=styled.div`
margin-top:60px ;
display: flex;
flex-direction:column;
align-items:center;
`
export const TextHigh=styled.text`
  font-size: 32px;
  font-weight: bold;
`

export const TextLow=styled.text`
  font-size: 22px;
`

export const BottonsContainer=styled.div`
margin-top:60px ;
display: flex;
flex-direction:line;
`