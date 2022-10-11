import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AddressContext } from "../../hooks/useAddress";

interface ListItemProps {
  content: string;
  route: string;
}

// Link para
function ListItem({ content, route }: ListItemProps) {
  const router = useRouter();
  return (
    <li
      className={`rounded-md bg-blue-400 p-2 font-bold hover:cursor-pointer hover:opacity-80 ${
        router.pathname === route ? "border-t-2 border-white underline" : ""
      }`}
    >
      <Link href={route} className="hover:opacity-80">
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

  // Função para gerar key única para cada item da navbar.
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
    </nav>
  );
}
