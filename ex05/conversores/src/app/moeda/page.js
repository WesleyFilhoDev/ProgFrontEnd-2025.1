"use client";

import { useState } from "react";

export default function Moeda() {
  const [valor, setValor] = useState("");
  const [isReaisToDolar, setIsReaisToDolar] = useState(true);
  const cotacao = 5.8419;

  const calcularConversao = () => {
    const numero = parseFloat(valor.replace(",", "."));
    if (isNaN(numero)) return "";
    return isReaisToDolar
      ? (numero / cotacao).toFixed(2) // Reais → Dólar
      : (numero * cotacao).toFixed(2); // Dólar → Reais
  };

  const handleInvert = () => {
    setIsReaisToDolar(!isReaisToDolar);
    setValor(""); // limpa valor ao inverter
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Conversor de Moeda</h1>
      <h2 className="mb-2">Cotação do Dólar = R$ 5,8419</h2>

      <form className="flex flex-row items-center gap-7 mb-4">
        {isReaisToDolar ? (
          <>
            <input
              type="number"
              placeholder="Valor em Reais"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Valor em Dólares"
              value={calcularConversao()}
              readOnly
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
          </>
        ) : (
          <>
            <input
              type="number"
              placeholder="Valor em Dólares"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Valor em Reais"
              value={calcularConversao()}
              readOnly
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
          </>
        )}
      </form>

      <button
        onClick={handleInvert}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition cursor-pointer"
      >
        Inverter
      </button>
    </div>
  );
}
