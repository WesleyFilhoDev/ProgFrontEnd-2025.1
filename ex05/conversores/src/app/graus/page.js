"use client";

import { useState } from "react";

export default function Temperatura() {
  const [valor, setValor] = useState("");
  const [isCelsiusToFahrenheit, setIsCelsiusToFahrenheit] = useState(true);

  const calcularConversao = () => {
    const numero = parseFloat(valor);
    if (isNaN(numero)) return "";
    return isCelsiusToFahrenheit
      ? ((numero * 9) / 5 + 32).toFixed(2) // Celsius → Fahrenheit
      : (((numero - 32) * 5) / 9).toFixed(2); // Fahrenheit → Celsius
  };

  const handleInvert = () => {
    setIsCelsiusToFahrenheit(!isCelsiusToFahrenheit);
    setValor(""); // Limpa valor ao inverter
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Conversor de Temperatura</h1>
      <h2 className="mb-2">Conversão entre Celsius e Fahrenheit</h2>

      <form className="flex flex-row items-center gap-7 mb-4">
        {isCelsiusToFahrenheit ? (
          <>
            <input
              type="number"
              placeholder="Valor em Celsius"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Valor em Fahrenheit"
              value={calcularConversao()}
              readOnly
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
          </>
        ) : (
          <>
            <input
              type="number"
              placeholder="Valor em Fahrenheit"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Valor em Celsius"
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
