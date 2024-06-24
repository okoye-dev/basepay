import Image from "next/image";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  icon: string;
  text: string;
  className?: string;
}

const ModalButton: FC<IProps> = ({ className, icon, text }: IProps) => {
  return (
    <p
      className={twMerge(
        "flex items-center justify-center rounded-full bg-gray px-6 py-2 font-medium text-black",
        className,
      )}
    >
      <Image src={icon} alt="add" width={18} height={18} />
      <span className="ml-2 text-base">{text}</span>
    </p>
  );
};

export default ModalButton;
