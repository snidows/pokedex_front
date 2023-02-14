import { useState } from "react";

export const useApiController = () => {
  const [name, setName] = useState<string>("");
  const [playerName, setPlayerName] = useState<null | string>("lucas");

  const [creatingTime, setCreatingTime] = useState<boolean>(false);

  const infoTime = {
    name: "",
    player: "",
    pokemons: {
      bulbassaur: {},
      rek: {},
      sdsd: {},
      asd: {},
      asdasda: {},
      ssdss: {},
    },
  };

  const setPlayerNameAction = () => {
    setPlayerName(name);
  };

  const createTime = () => {};
  const listTimes = () => {};
  const atualizarTimes = () => {};

  return { name, playerName, setName, setPlayerNameAction };
};
