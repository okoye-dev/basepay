"use client";
import React, { FC, useEffect, useState } from "react";
import logo from "@/app/assets/logo.png";
import menu from "@/app/assets/menu.svg";
import profilePic from "@/app/assets/profile-pic.svg";
import arrowDown from "@/app/assets/arrow-down.svg";
import arrowUp from "@/app/assets/arrow-up.svg";
import Image from "next/image";
import Link from "next/link";
import DisconnectModal from "./DisconnectModal";

interface IProps {}

const Navbar: FC<IProps> = () => {
  const [disconnectModal, setDisconnectModal] = useState(false);

  const toggleDisconnectModal = () => setDisconnectModal(!disconnectModal);

  return (
    <>
      <nav className="sticky top-0 z-50 mb-8 w-full bg-background px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={40} />
          </Link>
          <span className="flex items-center justify-center">
            <Image src={profilePic} alt="profile" width={48} height={48} />
            <span
              onClick={toggleDisconnectModal}
              className="relative flex h-6 w-6 cursor-pointer items-center justify-center gap-2"
            >
              <Image
                src={arrowDown}
                alt="down"
                width={10}
                height={10}
                className={`translate-x-2 transition-opacity duration-300 ${disconnectModal ? "opacity-100" : "opacity-0"}`}
              />
              <Image
                src={arrowUp}
                alt="up"
                width={10}
                height={10}
                className={`-translate-x-[9px] transition-opacity duration-300 ${disconnectModal ? "opacity-0" : "opacity-100"}`}
              />
              <DisconnectModal
                isOpen={disconnectModal}
                toggler={toggleDisconnectModal}
              />
            </span>
            <Image src={menu} alt="menu" width={30} height={30} />
          </span>
        </div>
        <span className="absolute left-0 top-16 my-4 flex h-[2px] w-full bg-border" />
      </nav>
    </>
  );
};

export default Navbar;
