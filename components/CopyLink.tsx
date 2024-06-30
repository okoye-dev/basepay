"use client";
import React, { FC, useState } from "react";
import ModalButton from "./ModalButton";
import copy from "@/app/assets/copy-no-border.svg";
import CustomAlert from "@/components/CustomAlert"; // Adjust the path as necessary

interface IProps {
  link: string;
}

const CopyLink: FC<IProps> = ({ link }: IProps) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setAlertVisible(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-2 rounded-full border border-border px-2 py-[6px]">
        <span className="overflow-hidden text-ellipsis text-nowrap pl-2 text-base font-semibold">
          {link}
        </span>
        <ModalButton
          className="cursor-pointer bg-blue/10 text-blue"
          icon={copy}
          text="Copy"
          onClick={handleCopy}
        />
      </div>
      {alertVisible && (
        <CustomAlert message="Link copied to clipboard!" onClose={closeAlert} />
      )}
    </div>
  );
};

export default CopyLink;
