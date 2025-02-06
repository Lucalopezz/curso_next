"use client";

import { useState } from "react";

const Button = () => {
  const [nome, setNome] = useState("Lucas");

  const handleChangeName = () => {
    setNome("Lucas2");
  };
  return (
    <div>
      <button onClick={handleChangeName}>Alterar nome aqui</button>
      <h3>Nome: {nome}</h3>
    </div>
  );
};

export default Button;
