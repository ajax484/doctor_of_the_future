"use client";
import Image from "next/image";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "@/components/account/Profile";
import MyBooking from "@/components/account/MyBooking";
import MySubscriptions from "@/components/account/MySubscriptions";
import MyOrders from "@/components/account/MyOrders";
import MyPrograms from "@/components/account/MyPrograms";
import { useUser } from "@supabase/auth-helpers-react";

const MyAccount = () => {
  const user = useUser();
  console.log(user);
  return (
    <div className="mt-12">
      <div className=" relative">
        <Image
          alt="image"
          src={
            "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          width={500}
          height={500}
          className=" w-full h-56 object-cover"
        />

        <div className=" absolute bottom-10 left-5">
          <div className=" flex flex-col items-end md:flex-row gap-x-4 gap-y-3">
            <Image
              alt="user image"
              src={user?.user_metadata.avatar_url}
              className="w-32 h-32 object-cover rounded-full"
              width={500}
              height={500}
            />
            <div>
              <h1 className=" text-white capitalize font-semibold">{user?.user_metadata.name}</h1>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="flex flex-wrap items-center justify-between text-xs bar">
          <TabsTrigger value="account">Profile</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="sub">Subscriptions</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
        </TabsList>
        <div className="my-16 xs:my-10">
          <TabsContent value="account">
            <Profile user={user} />
          </TabsContent>
          <TabsContent value="bookings">
            <MyBooking />
          </TabsContent>
          <TabsContent value="sub">
            <MySubscriptions />
          </TabsContent>
          <TabsContent value="orders">
            <MyOrders />
          </TabsContent>
          <TabsContent value="programs">
            <MyPrograms />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default MyAccount;
