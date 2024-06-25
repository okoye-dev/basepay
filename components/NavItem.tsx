import React, { FC } from "react";
import Image from "next/image";

interface IProps {
  regular: string;
  blue: string;
  text: string;
  active?: boolean;
}

const NavItem: FC<IProps> = ({ regular, blue, text, active }: IProps) => {
  return (
    <div className="relative">
      <Image
        src={regular}
        alt="active"
        width={24}
        height={24}
        className={`absolute left-0 duration-300 top-0${active ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={blue}
        alt="active"
        width={24}
        height={24}
        className={`active absolute left-0 top-0 duration-300 ${active ? "opacity-100" : "opacity-0"}`}
      />
      <p
        className={`${active ? "text-blue" : "text-textGray"} py-1 pl-8 font-medium duration-300`}
      >
        {text}
      </p>
    </div>
  );
};

export default NavItem;
