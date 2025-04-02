import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonMenu } from "./ButtonMenu";
import { Menu } from "./Menu";
interface NavbarProps {
  links?: { text: string; href: string }[];
}

export const Navbar = ({ links }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const defaultLinks = [
    // { text: "inicio", href: "/" },
    // { text: "Products", href: "/" },
    { text: "Clothing", href: "/products/clothing" },
    { text: "Automotive", href: "/products/automotive" },
    { text: "Garden", href: "/products/garden" },
    { text: "Fitness", href: "/products/fitness" },
    { text: "Food", href: "/products/food" },
    { text: "Contact", href: "/contact" },

  ];
  return (
    <nav className="w-full mt-4 mb-2 flex justify-center">
      <div className="w-80 flex justify-between items-center">
        <div className="logo-container">
          <Link to={"/"}>LOGO</Link>
        </div>
        {/* mobilemenu */}
        <ButtonMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} />
        {/* desktopMenu */}
        <div className="links-container hidden md:block">
          <ul className="flex space-x-1">
            {(links || defaultLinks).map((link) => {
              return (
                <li key={link.text} className="hover:scale-110 transition-all">
                  <Link to={link.href}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
