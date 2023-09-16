import { siteConfig } from "@/app/(root)/siteConfig/page";
import AuthForm from "@/components/ui/authCard";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login | " + siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function login() {
  return (
    <div className=" w-full px-4 md:px-8 lg:px-16 space-y-4 pt-6">
      <h1 className="text-2xl font-black text-center">Sign In/Up</h1>
      <div className="flex items-center gap-10 my-5 justify-center">
        <div className=" w-full border p-4 md:p-12">
          <AuthForm />
        </div>

        {/* image */}
        <div className=" w-full hidden md:block">
          <Image
            alt="home cooked healthy meal"
            src={
              "https://images.pexels.com/photos/793770/pexels-photo-793770.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            width={500}
            height={500}
            className=" w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
