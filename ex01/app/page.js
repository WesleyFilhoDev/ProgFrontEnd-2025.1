'use client'

import { useState } from 'react';

function Texto1() {
  return <p>ACHOUUUUUUUU!!!!!!!!</p>;
}

function MyButton() {
  return (
    <button>Meu primeiro botão</button>
  );
}

export default function Home() {
  const [hide, setHide] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * 100));
  const aula = 1;
  return (
    <div>
      <h1>Olá Turma!</h1> 
      <p>Essa é nossa {aula}ª aula de React</p>
      <hr/>
      <button onClick={() => setHide(!hide)}>{hide ? "Mostrar" : "Ocultar"}</button> <br/>
      {!hide && (
        <>
          <Texto1></Texto1>
        </>
      )}
      <hr></hr>
      <button onClick={() => setRandom(Math.floor(Math.random() * 100))}>Gerar número aleatório</button>
      <p>{random}</p>
      <hr/>
    </div>
  );
}
