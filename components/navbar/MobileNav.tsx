import Link from "next/link";
import { IoClose } from "react-icons/io5";

type MobileNavProps = {
  setNavMobile: (value: boolean) => void;
};

function MobileNav({ setNavMobile }: MobileNavProps): JSX.Element {
  return (
    <nav className="block md:hidden bg-black text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
        <li className="hover:font-light">
          <Link href={`/`}>Home</Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/plans`}>Pricing & Plans</Link>
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
}

export default MobileNav;
