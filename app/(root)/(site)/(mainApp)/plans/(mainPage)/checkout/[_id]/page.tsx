"use client";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/customButton";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useGetPlan } from "@/hooks/plans";
import useAuthModal from "@/hooks/useAuthModal";
import { formatPriceToNaira } from "@/utils/FormattedCurrency";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCaretForwardOutline } from "react-icons/io5";

export default function Page({ params }: { params: { _id: string } }) {
  const { _id } = params;
  const { fetchingPlan, fetchingPlanError, plan } = useGetPlan({ _id });
  const router = useRouter();
  const supabase = useSupabaseClient();
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  const user = useUser();
  const authModal = useAuthModal();

  // console.log(plan);

  return (
    <div className="px-4 md:px-8 space-y-8">
      <h2 className="text-gray-400 text-3xl pb-4 border-b-[1px]">Checkout</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-[70%] space-y-6 order-2 md:order-1">
          <div className="pb-8 border-b-[1px] border-slate-500">
            <div className="flex justify-between items-end pb-4">
              <h3 className="text-2xl font-normal">Customer Details</h3>
              <button
                className="underline font-light text-slate-500"
                onClick={() =>
                  user?.email ? handleLogout() : authModal.onOpen()
                }
              >
                Sign {user?.email ? "Out" : "In"}
              </button>
            </div>
            <span className="font-light text-slate-700">
              {user?.email ? (
                <>Signed in as in <span className=" hover:underline text-neutral-900">{user?.email}</span></>
              ) : (
                <>Not signed in</>
              )}
            </span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-normal">Payment</h3>
            <RadioGroup
              onValueChange={(value) => console.log(value)}
              defaultValue={""}
              className="flex flex-col w-full"
            >
              <Label
                htmlFor="plan"
                className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="plan" id="plan" />
                  <span>Buy a Plan</span>
                </div>
              </Label>
              <Label
                htmlFor="session"
                className="[&:has([data-state=checked])]:border-limeGreen [&:has([data-state=checked])]:bg-limeGreen/10 flex items-center justify-between border-[1px] p-4 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <RadioGroupItem value="session" id="session" />
                  <span>Pay For This Session</span>
                </div>
              </Label>
            </RadioGroup>
          </div>
          <Button
            onClick={() => (!user?.email ? authModal.onOpen() : "")}
            label="Buy Now"
            intent="primary"
          />
        </div>
        <div className="flex-[30%] border-[1px] p-6 border-slate-800 space-y-4 order-1 md:order-2">
          <h3 className="text-2xl">Order Summary</h3>
          <Loading loading={fetchingPlan} error={!!fetchingPlanError}>
            <>
              <div className="space-y-2 pb-4 border-b-[1px]">
                <h4 className="text-xl text-slate-700">{plan?.name}</h4>
                <p className="text-sm">{plan?.description}</p>
                <ul className="space-y-2">
                  {plan?.benefits?.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex justify-start items-center gap-0.5"
                    >
                      <IoCaretForwardOutline />
                      <span className="first-letter:uppercase text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <span className=" font-semibold">TOTAL</span>
                <span className=" font-semibold">
                  {plan?.price && formatPriceToNaira(plan?.price)}
                </span>
              </div>
            </>
          </Loading>
        </div>
      </div>
    </div>
  );
}
