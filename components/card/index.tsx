import { Check } from "phosphor-react";

interface CardProps {
  title: string;
  price: number;
  features: string[];
}

export function Card({ title, price, features }: CardProps) {
  function generateKey(pre: string) {
    return `${pre}_${new Date().getTime()}`;
  }

  return (
    <div className="h-full rounded-md border-2 border-blue-200 p-2 shadow-xl md:p-8">
      <h2
        id="shadow"
        className="text-base font-semibold text-blue-400 md:text-lg lg:text-5xl"
      >
        {title}
      </h2>
      <h3 className="my-2 text-lg font-semibold">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </h3>
      <ul className="p-4">
        {features.map((feature, index) => (
          <li
            className="flex items-center gap-4 text-sm md:text-base"
            key={generateKey(`Li_${index}`)}
          >
            <Check size={24} color="#008000" weight="bold" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
