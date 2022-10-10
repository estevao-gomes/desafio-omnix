import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState, useContext } from "react";
import { AddressContext } from "../hooks/useAddress";
import { useCep } from "../hooks/useCep";

export default function Home() {
  const [cep, setCep] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { getApiData } = useCep();

  const router = useRouter();

  const { updateAddress } = useContext(AddressContext);

  async function getAddress(event: FormEvent) {
    event.preventDefault();

    try {
      const newAddress = await getApiData(cep);

      updateAddress(newAddress);

      setCep("");

      router.push("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
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

      <main className="mt-4 h-fit text-center">
        <h1 className="">Bem vindo a OmNet, a sua Fibra ótica!</h1>
        <h2>Para começar, digite seu CEP abaixo.</h2>
        <form onSubmit={getAddress}>
          <label htmlFor="cep">
            CEP:
            <input
              name="cep"
              id="cep"
              value={cep}
              onChange={(inputData) => setCep(inputData.currentTarget.value)}
              type="tel"
              required
              pattern="\d{8}"
              className="mx-4 w-max border-2"
              placeholder="Digite seu CEP sem o traço."
            />
          </label>

          <button className="border-2" type="submit">
            Entrar
          </button>
          {errorMessage && (
            <span className="text-sm text-red-500"> {errorMessage}</span>
          )}
        </form>
      </main>
    </div>
  );
}
