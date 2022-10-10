import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Omnet - Fibra óptica</title>
        <meta name="author" content="Estevão Gomes" />
        <meta
          name="description"
          content="Esta é a página feita como desafio técnico para a Omnix Digital Experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-fit text-center">
        <h1 className="">Bem vindo a OmNet, a sua Fibra ótica!</h1>
        <h2>Para começar, digite seu CEP abaixo.</h2>
        <form>
          <input className="w-fit" placeholder="00000-000" />
          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}
