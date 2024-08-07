"use client";
import React, { useState } from "react";
import Profile from "../app/assets/profile-pic.svg";
import Image from "next/image";

const Header = ({ name }: { name: string }) => {
  const [address, setAddress] = useState("qwretrytugiihljiio");

  return (
    <div className="flex w-full justify-between">
      <h1 className="text-4xl">{name}</h1>
      {/* <div className="flex justify-between gap-2 align-middle">
        <Image src={Profile} alt="" />
        <p className="h-fit self-center text-sm font-medium">{address}</p>
      </div> */}
    </div>
  );
};

export default Header;
