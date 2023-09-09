"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  const user = useUser();

  return (
    <div className="px-8">
      <h2 className="text-gray-400 text-4xl pb-6 border-b-[1px]">Checkout</h2>
      <div className="flex gap-6">
        <div>
          <div>
            <div>
              <h3>Customer Details</h3>
              <button onClick={handleLogout}>Sign Out</button>
            </div>
            Signed in as in {user?.email}
          </div>
          <div>
            <h3>Payment</h3>
            <RadioGroup
              onValueChange={(value) => console.log(value)}
              defaultValue={""}
              className="grid md:grid-cols-2 gap-4 pt-2"
            >
              <div className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4">
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="plan" />
                  <span>Buy a Plan</span>
                </div>
              </div>
              <div className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4">
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="session" />
                  <span>Pay For This Session</span>
                </div>
                <span>here</span>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
