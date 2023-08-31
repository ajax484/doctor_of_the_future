"use client";
import React, { useState } from "react";
import { HiChevronDown, HiMenu, HiUser } from "react-icons/hi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { classNames } from "@/utils/helpers";
import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

type IAccountLinks = {
  label: string;
  href: string;
};

const getAccountLinks: (user: any) => IAccountLinks[] = (user) =>
  !!user
    ? [{ label: "Account", href: "/account" }]
    : [{ label: "Sign In/Up", href: "/login" }];

export default function AccountDropDown({
  session,
}: {
  session?: Session | null;
}) {
  const user = session?.user;
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <HiUser />
          <HiChevronDown
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {getAccountLinks(user).map((link) => (
              <Menu.Item key={link.label}>
                {({ active }) => (
                  <Link href={link.href}>
                    <span
                      className={"text-gray-700 block px-4 py-2 text-sm"}
                    >
                      {link.label}
                    </span>
                  </Link>
                )}
              </Menu.Item>
            ))}
            {!!user && (
              <form action={"/signout"} method="POST">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
