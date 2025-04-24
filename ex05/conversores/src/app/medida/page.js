"use client";

import { useState } from "react";

export default function Medida() {
  const [valor, setValor] = useState("");
  const [unidadeOrigem, setUnidadeOrigem] = useState("metros");
  const [unidadeDestino, setUnidadeDestino] = useState("pes");

  const calcularConversao = () => {
    const numero = parseFloat(valor);
    if (isNaN(numero)) return "";

    // Conversões
    if (unidadeOrigem === "metros") {
      if (unidadeDestino === "pes") {
        return (numero * 3.28084).toFixed(2); // metros → pés
      } else if (unidadeDestino === "polegadas") {
        return (numero * 39.3701).toFixed(2); // metros → polegadas
      }
    } else if (unidadeOrigem === "pes") {
      if (unidadeDestino === "metros") {
        return (numero / 3.28084).toFixed(2); // pés → metros
      } else if (unidadeDestino === "polegadas") {
        return (numero * 12).toFixed(2); // pés → polegadas
      }
    } else if (unidadeOrigem === "polegadas") {
      if (unidadeDestino === "metros") {
        return (numero / 39.3701).toFixed(2); // polegadas → metros
      } else if (unidadeDestino === "pes") {
        return (numero / 12).toFixed(2); // polegadas → pés
      }
    }

    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Conversor de Medidas</h1>
      <h2 className="mb-2">Conversão entre Metros, Pés e Polegadas</h2>

      <form className="flex flex-row items-center gap-7 mb-4">
        <div>
          <select
            value={unidadeOrigem}
            onChange={(e) => setUnidadeOrigem(e.target.value)}
            className="p-2 rounded-lg bg-gray-800 text-white mr-5"
          >
            <option value="metros">Metros</option>
            <option value="pes">Pés</option>
            <option value="polegadas">Polegadas</option>
          </select>
          <input
            type="number"
            placeholder={`Valor em ${
              unidadeOrigem.charAt(0).toUpperCase() + unidadeOrigem.slice(1)
            }`}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="p-2 rounded-lg bg-gray-800 text-white mt-2"
          />
        </div>

        <div>
          <select
            value={unidadeDestino}
            onChange={(e) => setUnidadeDestino(e.target.value)}
            className="p-2 rounded-lg bg-gray-800 text-white mr-5"
          >
            <option value="metros">Metros</option>
            <option value="pes">Pés</option>
            <option value="polegadas">Polegadas</option>
          </select>
          <input
            type="text"
            placeholder={`Valor em ${
              unidadeDestino.charAt(0).toUpperCase() + unidadeDestino.slice(1)
            }`}
            value={calcularConversao()}
            readOnly
            className="p-2 rounded-lg bg-gray-800 text-white mt-2"
          />
        </div>
      </form>
    </div>
  );
}
