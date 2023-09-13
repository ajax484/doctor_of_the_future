import Link from "next/link";
import { menuItems } from "./Header";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-4">
      <ul className="hidden md:flex gap-x-3 text-xs lg:gap-x-6 uppercase lg:text-sm">
        {menuItems.map((item, index) => (
          <li key={index} className="hover:text-limeGreen">
            <Link href={item.link}>
              <span className="text-xs lg:text-sm text-slate-700">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
