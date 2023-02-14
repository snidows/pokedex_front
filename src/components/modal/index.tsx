import React, { useState } from "react";
import { ModalBackground, ModalContainer } from "./styles";
export const ModalComponent = ({component,open}:{component:JSX.Element,open:boolean}) => {
  return (
    <>
      {open && (
        <ModalBackground>
          <ModalContainer>
            {component}
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};
