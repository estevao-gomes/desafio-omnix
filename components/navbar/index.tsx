interface ListItemProps {
  content: string;
  route: string;
}

function ListItem({ content, route }: ListItemProps) {
  return (
    <li className="">
      <a href={route} className="hover:opacity-80 active:opacity-80">
        {content}
      </a>
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
  // The borders are to be removed on production
  return (
    <nav className="">
      <ul className="flex justify-end gap-4 bg-gray-500 py-2 pr-4">
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
