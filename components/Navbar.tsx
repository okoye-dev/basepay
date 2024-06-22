import React, { FC } from "react";
import logo from "@/app/assets/logo.png";
import menu from "@/app/assets/menu.svg";
import profilePic from "@/app/assets/profile-pic.svg";
import arrowDown from "@/app/assets/arrow-down.svg";
import arrowUp from "@/app/assets/arrow-up.svg";
import Image from "next/image";
import Link from "next/link";

interface IProps {}

const Navbar: FC<IProps> = () => {
  return (
    <nav className="w-full bg-background sticky top-0 z-50 mb-8">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={40} />
        </Link>
        <span className="flex justify-center items-center gap-[6px]">
          <Image src={profilePic} alt="profile" width={48} height={48} />
          <Image src={arrowDown} alt="down" width={10} height={10} />
          <Image src={menu} alt="menu" width={30} height={30} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
