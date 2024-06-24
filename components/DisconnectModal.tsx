import React, { FC, SetStateAction } from "react";
import disconnect from "@/app/assets/disconnect.svg";
import Image from "next/image";

interface IProps {
  isOpen: boolean;
  toggler: () => void;
}

const DisconnectModal: FC<IProps> = ({ isOpen, toggler }: IProps) => {
  return (
    <button
      onClick={toggler}
      type="button"
      className={`${!isOpen && "hidden"} absolute -right-[10px] top-11 z-[999] flex w-44 items-center justify-center gap-2 rounded-2xl border border-border bg-white p-3 font-medium shadow-2xl text-nowrap`}
    >
      <Image src={disconnect} alt="disconnect" width={24} height={24} />
      Disconnect wallet
    </button>
  );
};

export default DisconnectModal;
