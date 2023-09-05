import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-4">
      <ul className="hidden md:flex gap-x-3 text-xs  lg:gap-x-6 uppercase lg:text-sm">
        <li className="hover:font-light">
          <Link href={`/`}>
            <span className="text-sm text-slate-700">Home</span>
          </Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/plans`}>
            <span className="text-sm text-slate-700">Plans & Pricing</span>
          </Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/`}>
            <span className="text-sm text-slate-700">Book Online</span>
          </Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/shop`}>
            <span className="text-sm text-slate-700">Shop</span>
          </Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/`}>
            <span className="text-sm text-slate-700">Blog</span>
          </Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/programs`}>
            <span className="text-sm text-slate-700">Programs</span>
          </Link>
        </li>
        <li className="hover:font-light">
          <Link href={`/terms`}>
            <span className="text-sm text-slate-700">Terms</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
