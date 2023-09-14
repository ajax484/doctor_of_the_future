"use client";
import Image from "next/image";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "@/components/account/Profile";
import MyBooking from "@/components/account/MyBooking";
import MySubscriptions from "@/components/account/MySubscriptions";
import MyOrders from "@/components/account/MyOrders";
import MyPrograms from "@/components/account/MyPrograms";

const MyAccount = () => {
  return (
    <div className=" mt-12">
      <div>
        <Image
          alt="image"
          src={
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
          }
          width={500}
          height={500}
          className=" w-full h-56 object-cover"
        />
      </div>

      <Tabs defaultValue="account" className="w-full lg:container">
        <TabsList className="flex flex-wrap items-center justify-between text-xs bar">
          <TabsTrigger value="account">Profile</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="sub">Subscriptions</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
        </TabsList>
        <div className="my-16 xs:my-10">
          <TabsContent value="account">
            <Profile />
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
