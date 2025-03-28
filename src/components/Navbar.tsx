import { Link } from "react-router-dom";

interface NavbarProps {
  links?: { text: string; href: string }[];
}

export const Navbar = ({ links }: NavbarProps) => {
  const defaultLinks = [
    { text: "inicio", href: "/" },
    { text: "Products", href: "/" },
    { text: "Clothing", href: "/products/clothing - outerwear" },
    { text: "Automotive", href: "/products/automotive" },
    { text: "Garden", href: "/products/garden" },
    { text: "Fitness", href: "/products/fitness" },
  ];
  return (
    <nav>
      <ul className="flex w-full justify-between">
        {(links || defaultLinks).map((link) => {
          return (
            <li key={link.text}>
              <Link to={link.href}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
