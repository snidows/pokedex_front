import { ButtonComponent } from "./styles";

export const MenuPokedexComponent = ({ action }: { action: Function }) => {
  return (
    <>
      <ButtonComponent
        onClick={() => {
          action("listar_pokemons");
        }}
      >
        Pokédex
      </ButtonComponent>
      <ButtonComponent
        onClick={() => {
          action("criar_times");
        }}
      >
        Criar Times
      </ButtonComponent>
      <ButtonComponent
        onClick={() => {
          action("listar_times");
        }}
      >
        Listar Times
      </ButtonComponent>
    </>
  );
};
