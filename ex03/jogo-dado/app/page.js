"use client";
import { useState } from "react";
import Image from "next/image";

function Tittle() {
  return <h1>Jogo do Dado</h1>;
}

function NumeroRodada({ rodada }) {
  return <h2>Rodada {rodada}</h2>;
}

function MyButton({ onClick, disabled }) {
  return (
    <button
      className="buttonGirar"
      onClick={onClick}
      disabled={disabled}
      style={{
        border: "2px solid red",
        borderRadius: "5px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      GIRAR
    </button>
  );
}

function gerarNumAleat1() {
  return Math.floor(Math.random() * 6) + 1;
}

function gerarNumAleat2() {
  return Math.floor(Math.random() * 6) + 1;
}

function GirarDado({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ borderRadius: "50px", padding: "20px" }}
    />
  );
}

export default function Home() {
  const [rodada, setRodada] = useState(1);
  const [random1, setRandom1] = useState(1);
  const [random2, setRandom2] = useState(1);
  const [girar1, setGirar1] = useState(false);
  const [girar2, setGirar2] = useState(false);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [vencedor, setVencedor] = useState(null);

  const handleClick1 = () => {
    if (!girar1) {
      setRandom1(gerarNumAleat1());
      setGirar1(true);
    }
  };

  const handleClick2 = () => {
    if (!girar2) {
      setRandom2(gerarNumAleat2());
      setGirar2(true);
    }
  };

  const handleEndRound = () => {
    if (rodada < 5) {
      if (random1 > random2) {
        setVitoriasJogador1(vitoriasJogador1 + 1);
      } else if (random2 > random1) {
        setVitoriasJogador2(vitoriasJogador2 + 1);
      }
      setRodada((prevRodada) => prevRodada + 1);
      setGirar1(false);
      setGirar2(false);
    } else {
      if (vitoriasJogador1 > vitoriasJogador2) {
        setVencedor("Jogador 1");
      } else if (vitoriasJogador2 > vitoriasJogador1) {
        setVencedor("Jogador 2");
      } else {
        setVencedor("Empate");
      }
    }
  };

  const handleReset = () => {
    setRodada(1);
    setRandom1(1);
    setRandom2(1);
    setGirar1(false);
    setGirar2(false);
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setVencedor(null);
  };

  return (
    <div className="container">
      <Tittle />
      <NumeroRodada rodada={rodada} style={{ color: "white" }} />
      <div className="jogo">
        <div className="jogador1">
          <h1>JOGADOR 1</h1>
          <GirarDado src={`/dado${random1}.jpg`} alt={`Dado ${random1}`} />
          <MyButton onClick={handleClick1} disabled={girar1} />
        </div>
        <div className="jogador2">
          <h1>JOGADOR 2</h1>
          <GirarDado src={`/dado${random2}.jpg`} alt={`Dado ${random2}`} />
          <MyButton onClick={handleClick2} disabled={girar2} />
        </div>
        <button
          onClick={handleEndRound}
          style={{
            border: "2px solid green",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          disabled={!(girar1 && girar2)}
          className={girar1 && girar2 ? "enabled" : "disabled"}
        >
          Avançar para a próxima rodada
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: "10px",
            marginTop: "20px",
            borderRadius: "5px",
            border: "2px solid blue",
            cursor: "pointer",
          }}
        >
          Jogar novamente
        </button>
        {vencedor && (
          <div style={{ marginTop: "30px", fontSize: "1.5rem" }}>
            <h3>O vencedor é: {vencedor}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
