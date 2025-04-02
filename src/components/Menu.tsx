import { Link } from "react-router-dom";

interface MenuProps{
  menuOpen: boolean
}

export const Menu = ({ menuOpen }: MenuProps) => {
  const defaultLinks = [
    { text: "Clothing", href: "/products/clothing" },
    { text: "Automotive", href: "/products/automotive" },
    { text: "Garden", href: "/products/garden" },
    { text: "Fitness", href: "/products/fitness" },
    { text: "Food", href: "/products/food" },
    { text: "Contact", href: "/contact" },
  ];
  if (!menuOpen) {
    return null;
  }

  return (
    <div>
      <ul>
        {defaultLinks.map((link) => (
          <li key={link.text} className="hover:scale-110 transition-all">
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
