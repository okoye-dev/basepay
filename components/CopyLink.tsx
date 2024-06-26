import React, { FC } from "react";
import ModalButton from "./ModalButton";
import copy from "@/app/assets/copy-no-border.svg";

interface IProps {
  link: string;
}

const CopyLink: FC<IProps> = ({ link }: IProps) => {
  return (
    <div className="flex items-center justify-between gap-2 rounded-full border border-border px-2 py-[6px]">
      <span className="overflow-hidden text-ellipsis text-nowrap pl-2 text-base font-semibold">
        {link}
      </span>
      <ModalButton
        className="cursor-pointer bg-blue/10 text-blue"
        icon={copy}
        text="Copy"
      />
    </div>
  );
};

export default CopyLink;
