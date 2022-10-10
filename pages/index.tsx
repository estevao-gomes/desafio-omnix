import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState, useContext } from "react";
import { AddressContext } from "../hooks/useAddress";
import { useCep } from "../hooks/useCep";

export default function Home() {
  const [cep, setCep] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { getApiData } = useCep();

  // Router para enviar o usuário para a página principal após inserir o cep corretamente.
  const router = useRouter();

  // Context com endereço.
  const { updateAddress } = useContext(AddressContext);

  async function getAddress(event: FormEvent) {
    event.preventDefault();

    getApiData(cep)
      .then((newAddress) => {
        updateAddress(newAddress);
        setCep("");
        router.push("/home");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }
  return (
    <div className="h-screen">
      <Head>
        <title>OmniNet - Fibra óptica</title>
        <meta name="author" content="Estevão Gomes" />
        <meta
          name="description"
          content="Esta é a página feita como desafio técnico para a Omnix Digital Experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen items-center justify-center bg-blue-500 text-center">
        <div className="h-fit w-fit rounded-md bg-white p-4">
          <h1 className="text-3xl font-bold">
            Bem vindo a OmniNet, a sua Fibra ótica!
          </h1>
          <h2 className="my-2 text-xl">Para começar, digite seu CEP abaixo:</h2>
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

            <button
              className="rounded-md border-2 border-blue-300 p-2 transition-all duration-300 hover:border-blue-500 hover:bg-blue-300 hover:text-white"
              type="submit"
            >
              Entrar
            </button>
            {errorMessage && (
              <p className="text-sm text-red-500"> {errorMessage}</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
