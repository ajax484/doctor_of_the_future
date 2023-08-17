import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  items-center gap-x-4">
      <ul className="hidden md:flex  gap-x-6 uppercase text-sm">
        <li className="hover:font-light">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/`}>Pricing & Plans</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/`}>Book Online</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/shop`}>Shop</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/`}>Blog</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/`}>Programs</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/terms`}>Terms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
