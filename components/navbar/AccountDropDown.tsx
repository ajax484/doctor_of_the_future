"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthModal from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";
import {
  useSessionContext,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Avatar from "../utils/Avatar";
import { Link } from "lucide-react";

const AccountDropDown = () => {
  // router
  const router = useRouter();
  // user session
  const { session } = useSessionContext();
  const supabase = useSupabaseClient();
  // if theres a user
  const user = useUser();

  // console.log(user)
  // hook for auth modal
  const authModal = useAuthModal();

  // handle sign out
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="py-2 text-xs md:px-8  flex items-center justify-between">
      <div>
        <ul className="flex items-center font-normal capitalize gap-x-3 md:gap-x-2">
          <li className=" font-semibold cursor-pointer">
            {session && user?.id ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center gap-x-2">
                    <Avatar src={user?.user_metadata.avatar_url} />
                    <p className=" capitalize font-light text-xs">
                      {user?.user_metadata.name}
                    </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-52 max-h-max">
                  <DropdownMenuLabel> Account Details</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="my-5">
                    <div className="flex items-center gap-x-3">
                      <Avatar src={user?.user_metadata.avatar_url} />
                      <span>{user?.user_metadata.name}</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div
                      onClick={() => router.push("/myaccount")}
                      className=" capitalize cursor-pointer"
                    >
                      my orders
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <div
                      onClick={() => router.push("/myaccount")}
                      className=" capitalize cursor-pointer"
                    >
                      my bookings
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div
                      onClick={() => router.push("/myaccount")}
                      className=" capitalize cursor-pointer"
                    >
                      my subscriptions
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <div
                      onClick={() => router.push("/myaccount")}
                      className=" capitalize cursor-pointer"
                    >
                      my programs
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <div
                      onClick={() => router.push("/myaccount")}
                      className=" capitalize cursor-pointer"
                    >
                      my account
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <button onClick={handleLogout}>Sign Out</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              //   if no user
              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-2" onClick={authModal.onOpen}>
                  <h5 className="text-slate-700 font-normal text-xs lg:text-sm">LOGIN</h5>
                  <Avatar src={user?.user_metadata.avatar_url} />
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AccountDropDown;
