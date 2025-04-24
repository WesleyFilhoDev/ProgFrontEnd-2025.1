export function ConverterCard({ title, bgColor }) {
  return (
    <div
      className={`${bgColor} text-white p-6 m-4 rounded-lg shadow-md w-64 text-center cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95`}
    >
      <h2 className="text-xl font-semibold leading-snug">{title}</h2>
    </div>
  );
}
