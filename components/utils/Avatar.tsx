"use client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string | undefined | null;
}

// since we expecting an image it can either be nothing or a string '

const Avatar = ({ src }: AvatarProps) => {
  return (
    <>
      <Image
        className="rounded-full cursor-pointer w-8 h-8 lg:w-6 lg:h-6"
        height="200"
        width="200"
        alt="Avatar"
        src={
          src ||
          "https://th.bing.com/th/id/OIP.hRK810QEOJAS0bl486VjPAHaHa?pid=ImgDet&rs=1"
        }
      />
    </>
  );
};

export default Avatar;
