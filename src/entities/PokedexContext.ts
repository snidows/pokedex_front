import React from "react";

export interface PokedexContextDTO{
    player:string,
    setPlayer:React.Dispatch<React.SetStateAction<string>>
}