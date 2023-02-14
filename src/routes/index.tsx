import { Navigate, Route, Routes } from "react-router-dom";
import { PokeDexPage } from "../pages/Pokedex";

export const Router = () => {
  return (
    <Routes>
      <Route path="/pokedex" element={<PokeDexPage />} />
      <Route path="/*" element={<Navigate to={"/pokedex"} />} />
    </Routes>
  );
};
