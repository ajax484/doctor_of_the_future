import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex  items-center gap-x-4">
      <ul className="hidden md:flex gap-x-3 text-xs  lg:gap-x-6 uppercase lg:text-sm">
        <li className="hover:font-light">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/plans`}>Plans & Pricing</Link>
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
