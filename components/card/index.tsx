import { Check } from "phosphor-react";

interface CardProps {
  title: string;
  price: number;
  features: string[];
}

export function Card({ title, price, features }: CardProps) {
  // Função para gerar uma key única para cada item da lista.
  function generateKey(pre: string) {
    return `${pre}_${new Date().getTime()}`;
  }

  return (
    <div className="h-full rounded-md border-2 border-blue-200 p-2 shadow-xl md:p-8">
      {/* O id "shadow" adiciona sombra nas letrar. Tailwind não fornece opção para isso. */}
      <h2
        id="shadow"
        className="text-base font-semibold text-blue-400 md:text-lg lg:text-5xl"
      >
        {title}
      </h2>
      <h3 className="my-2 font-semibold md:text-lg">
        {/* Formata o preço em reais. */}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </h3>
      <ul className="p-4">
        {features.map((feature, index) => (
          <li
            className="flex items-center text-sm md:gap-4 md:text-base"
            key={generateKey(`Li_${index}`)}
          >
            <Check
              className="hidden md:block"
              size={24}
              color="#008000"
              weight="bold"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
