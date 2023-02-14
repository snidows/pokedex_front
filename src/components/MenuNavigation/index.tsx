import {
  ActionDiv,
  Container,
  MenuDiv,
} from "./styles";

export const MenuNavigation = ({
  menu,
  modalComponent,
  componentsAction,
}: {
  menu: JSX.Element;
  modalComponent: JSX.Element;
  componentsAction: JSX.Element;
}) => {
  return (
    <Container>
      <MenuDiv>{menu}</MenuDiv>
      {modalComponent}
      <ActionDiv>{componentsAction}</ActionDiv>
    </Container>
  );
};
