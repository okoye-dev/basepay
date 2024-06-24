import Image from "next/image";
import React, { FC, ReactNode } from "react";
import add from "@/app/assets/add.svg";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  children: ReactNode;
  hasAddIcon?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<IProps> = ({
  className,
  children,
  hasAddIcon = false,
  type = "button",
}: IProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        "flex items-center justify-center gap-2 text-balance rounded-full bg-blue px-6 py-3 text-base font-medium text-white",
        className,
      )}
    >
      {hasAddIcon && (
        <Image
          src={add}
          alt="create new"
          className="h-4 w-4"
          width={12}
          height={12}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
