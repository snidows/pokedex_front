import styled from "styled-components"
import { colors } from "../../shared/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:36px;
  font-weight:bold;
`;

export const TextInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:36px;
  font-weight:bold;
  margin-top:20px;
  border:0;
`;
export const BtnInputAction = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:36px;
  font-weight:bold;
  border:0;
  margin-top:20px;
  background:${colors.red_base};
  &:hover{
    background:${colors.red_base_light};
  }
`;