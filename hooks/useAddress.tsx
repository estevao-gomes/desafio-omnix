import { useState, createContext, ReactNode } from "react";

// Usando apenas os dados necessários da API.
interface AddressType {
  bairro: string;
  cidade: string;
  estado: string;
}

interface contextType {
  address: AddressType;
  // erro de eslint no typescript (no unused vars) que não faz sentido no contexto da interface.
  // eslint-disable-next-line
  updateAddress: (newAddress: AddressType) => void;
}
interface Props {
  children: ReactNode;
}

// Criando o context para o endereço, a ser passado para as páginas.
export const AddressContext = createContext({} as contextType);

export function AddressProvider({ children }: Props) {
  const [address, setAddress] = useState<AddressType>();

  function updateAddress(newAddress: AddressType) {
    setAddress(newAddress);
  }

  return (
    // desabilitando eslint na proxima linha pois o useContext vai rerenderizar com alteração do estado address (intencional).
    // eslint-disable-next-line
    <AddressContext.Provider value={{ address, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
