import React from "react"; //rafce atajo para creacion de componente con exportacion default, rafc con exportacion nombrada. La exportacion de React ya no es obligatoria

export const Footer = () => {
  return (
    <>
      <h1>dcsvakmnacd</h1>
      <h2>dmnsksmkds</h2>
    </>
  );
};

// como en una funcion solo puedo retornar una cosa, tendria que encerrar mis etiquetas en un div para poder retornar lo que quiero, pero eso haria que tuviera muchos divs innecesarios en mi html. Entonces puedo usar el fragment <></>, una etiqueta vacía que despues no aparece en el html
