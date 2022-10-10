import { FormEvent, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useCep } from "../hooks/useCep";

interface WelcomeProps {
  CloseModal: () => void;
  isOpen: boolean;
}

export function Welcome({ CloseModal, isOpen }: WelcomeProps) {
  const [cep, setCep] = useState<string>("");

  const { getApiData } = useCep();

  function getAddress(event: FormEvent) {
    event.preventDefault();

    CloseModal();

    const address = getApiData(cep);

    // eslint-disable-next-line
    console.log(address);
  }

  return (
    <Dialog
      open={isOpen}
      className="fixed inset-0 top-0 z-10 flex justify-center"
      onClose={CloseModal}
    >
      <Dialog.Panel>
        <Dialog.Title>Bem-vindo!</Dialog.Title>
        <Dialog.Description>
          Bem vindo a OmNet, a sua Fibra ótica!
        </Dialog.Description>

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
              className="w-fit"
              placeholder="Digite seu CEP sem o traço. Ex.: 22222222"
            />
          </label>

          <button type="submit">Entrar</button>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}
