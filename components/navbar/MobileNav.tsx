import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from "next/navigation";

type MobileNavProps = {
  setNavMobile: (value: boolean) => void;
};

function MobileNav({ setNavMobile }: MobileNavProps): JSX.Element {
  const user = useUser();
  const supabase = useSupabaseClient();
  const router = useRouter()
  // handle sign out
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="block md:hidden bg-black text-gray-300 w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute right-6 top-6 cursor-pointer "
      />

      <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary">
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/`}>Home</Link>
        </li>
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/plans`}>Pricing & Plans</Link>
        </li>
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/`}>Book Online</Link>
        </li>
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/shop`}>Shop</Link>
        </li>
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/`}>Blog</Link>
        </li>
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/`}>Programs</Link>
        </li>
        <li onClick={() => setNavMobile(false)} className="hover:font-light">
          <Link href={`/terms`}>Terms</Link>
        </li>
        {!!user ? (
          <>
            <li
              onClick={() => setNavMobile(false)}
              className="hover:font-light"
            >
              <Link href={`/account`}>Account</Link>
            </li>
            <div>
              <li
                onClick={() => {
                  setNavMobile(false);
                }}
                className="hover:font-light"
              >
                <button type="submit" onClick={handleLogout}>
                  Sign out
                </button>
              </li>
            </div>
          </>
        ) : (
          <li onClick={() => setNavMobile(false)} className="hover:font-light">
            <Link href={`/login`}>Sign In/Up</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MobileNav;
