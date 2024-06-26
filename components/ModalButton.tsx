import Image from "next/image";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  icon: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const ModalButton: FC<IProps> = ({
  className,
  icon,
  text,
  onClick,
}: IProps) => {
  return (
    <p
      onClick={onClick}
      className={twMerge(
        "flex cursor-pointer items-center justify-center rounded-full bg-gray px-4 py-2 font-medium text-black",
        className,
      )}
    >
      <Image src={icon} alt="add" width={18} height={18} />
      <span className="ml-2">{text}</span>
    </p>
  );
};

export default ModalButton;
