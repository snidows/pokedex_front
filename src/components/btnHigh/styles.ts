import styled from "styled-components";
import { colors } from "../../shared/colors";
export const Container = styled.div`
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border-width: 12px;
  background-color: ${colors.red_base};
  text-align: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;  
  color: ${colors.white_pure};
  border-radius: 12px;
  margin:10px;
  &:hover {
    background-color: ${colors.red_base_light};
  }
`;
