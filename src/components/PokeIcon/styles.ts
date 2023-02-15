import styled from "styled-components";
import { colors } from "../../shared/colors";
interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;\
  min-width:40px;
  max-width:100px;
  min-height:40px;
  max-height:100px;
  display: flex;
  flex-direction: column;
  border-width: 12px;
  text-align: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  color: ${colors.black_light};
  background-color: ${(props) =>
    props.isSelected ? colors.green_glass : colors.white_pure};
  border-radius: 16px;
  margin: 10px;
  padding: 10px;
`;

export const Header = styled.div`
  height: 10%;
  width: 100%;
  font-size: 14px;
  text-align: right;
`;

export const Center = styled.div`
  width: 100%;
`;

export const Avatar = styled.img`
  height: 80px;
  width: 80px;
`;

export const Boton = styled.div`
  height: 20%;
  width: 100%;
  font-size: 20px;
  text-align: center;
`;
