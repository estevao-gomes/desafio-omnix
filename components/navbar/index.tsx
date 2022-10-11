import Link from "next/link";
import { useContext } from "react";
import { AddressContext } from "../../hooks/useAddress";

interface ListItemProps {
  content: string;
  route: string;
}

function ListItem({ content, route }: ListItemProps) {
  return (
    <li className="rounded-md bg-blue-400 p-2 font-bold hover:cursor-pointer hover:opacity-80 active:border-t-2 active:border-white active:underline">
      <Link href={route} className="hover:opacity-80 active:opacity-80">
        {content}
      </Link>
    </li>
  );
}

export function Navbar() {
  const navItems = [
    { route: "/home", content: "Home" },
    { route: "/offers", content: "Ofertas" },
  ];
  function generateKey(pre: string) {
    return `${pre}_${new Date().getTime()}`;
  }
  const { address } = useContext(AddressContext);

  return (
    <nav className="flex w-screen items-center bg-blue-500 py-2 font-sans text-white">
      <h1 className="ml-2 mr-auto">
        {address
          ? `${address.bairro}, ${address.cidade}, ${address.estado}`
          : "Endereço não fornecido"}
      </h1>
      <ul className="mr-4 flex w-full items-center justify-end gap-4 pr-4">
        {navItems.map((item, index) => (
          <ListItem
            route={item.route}
            content={item.content}
            key={generateKey(`NavLi_${index.toString()}`)}
          />
        ))}
      </ul>
      <Link href="/">
        <button
          type="button"
          className="mr-2 rounded-md border-2 border-blue-300 py-4 px-2 text-base font-bold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-300"
        >
          Ops, errei meu CEP!
        </button>
      </Link>
    </nav>
  );
}
