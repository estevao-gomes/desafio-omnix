import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function Offers() {
  const plans = [
    {
      title: "Plano Básico",
      price: 100,
      features: ["150MBPs de velocidade;", "WiFi."],
    },
    {
      title: "Plano Família",
      price: 150,
      features: [
        "250MBPs de velocidade;",
        "WiFi;",
        "Proteção 24hrs pelo Atendimento Omnix.",
      ],
    },
    {
      title: "Plano Premium",
      price: 250,
      features: [
        "350MBPs de velocidade;",
        "WiFi;",
        "Proteção 24hrs pelo Atendimento Omnix;",
        "Pontos no Omnix Plan, onde você pode trocar por prêmios e serviços.",
      ],
    },
  ];

  function generateKey(pre: string) {
    return `${pre}_${new Date().getTime()}`;
  }

  return (
    <>
      <Navbar />
      <main className="mx-4 flex h-[85vh] flex-col items-center justify-center md:mx-16">
        <h1 className="my-2 text-lg font-bold text-blue-500 xl:my-14 xl:text-6xl">
          Confira Nossos Planos!
        </h1>
        <section className="mb-4 grid h-max flex-1 grid-cols-3 gap-2 md:gap-8 xl:mb-32">
          {plans.map((plan, index) => (
            <Card
              key={generateKey(`Plan_${index}`)}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
