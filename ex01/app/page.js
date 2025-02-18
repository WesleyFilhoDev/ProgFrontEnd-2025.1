function Texto1() {
  return <p>Um outro parágrafo de texto</p>;
}

function MyButton() {
  return (
    <button>Meu primeiro botão</button>
  );
}

export default function Home() {
  const aula = 1;
  return (
    <>
      <h1>Olá Turma!</h1> 

      <p>Essa é nossa {aula}ª aula de React</p>

      <Texto1></Texto1>

      <MyButton></MyButton>
    </>
  );
}
