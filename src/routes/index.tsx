import { Navigate, Route, Routes } from "react-router-dom";
import { InitialPage } from "../pages/Index";
import { PokeDexPage } from "../pages/Pokedex";
import { TimeManagerPage } from "../pages/TimeManager";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/pokedex" element={<PokeDexPage />} />
      <Route path="/time" element={<TimeManagerPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
