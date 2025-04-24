import Link from "next/link";
import { ConverterCard } from "./components/ConverterCard";

export default function Home() {
  return (
    <div>
      <header className="flex flex-col items-center p-10">
        <h1 className="text-3xl font-bold mb-4">
          Conversores de Moeda, Temperatura e Comprimento
        </h1>
        <p className=" text-center max-w-xl text-gray-300 mb-8">
          Este site é uma ferramenta simples e prática que permite realizar três
          tipos de conversões úteis no dia a dia.
        </p>
        <h2 className="text-4xl mb-4">Sobre o criador do site Converter</h2>
        <p className="text-center text-gray-300">
          Prazer, me chamo Wesley Filho. Sou um Pernambucano criado no Ceará.
          Atualmente moro em Recife e curso a faculdade de Sistemas para
          Internet na Universidade Católica de Pernambuco. Atuo como
          Desenvolvedor Front-End em aplicações Web usando HTML5, CSS, JS,
          Frameworks e algumas ferramentas e conceitos para melhoria do processo
          de criação e resultado, como FIGMA, UI e UX. Sou uma pessoa bastante
          comunicativa, organizada e responsável. Tenho muita facilidade e
          vontade em aprender coisas novas, conhecimento para mim nunca é
          demais!!
        </p>
      </header>

      <main className="flex flex-wrap justify-center">
        <div>
          <Link href="/moeda" target="_blank">
            <ConverterCard
              title={
                <>
                  Conversor de
                  <br />
                  Moeda
                </>
              }
              bgColor="bg-blue-700"
            />
          </Link>
        </div>

        <div>
          <Link href="/graus" target="_blank">
            <ConverterCard
              title="Conversor de Temperatura"
              bgColor="bg-red-700"
            />
          </Link>
        </div>

        <div>
          <Link href="/medida" target="_blank">
            <ConverterCard
              title="Conversor de Comprimento"
              bgColor="bg-green-700"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
