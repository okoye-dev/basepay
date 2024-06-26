"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import visit from "@/app/assets/visit-link-white.svg";
import cancel from "@/app/assets/cancel.svg";
import greenCheck from "@/app/assets/green-check.svg";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import CopyLink from "./CopyLink";
import ModalButton from "./ModalButton";

interface IProps {
  isDialogOpen: boolean;
  handleDialogClose: () => void;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentLinkCreated: FC<IProps> = ({
  isDialogOpen,
  handleDialogClose,
  setIsDialogOpen,
}) => {
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent>
        <div className="flex w-full justify-center">
          <AlertDialogCancel asChild>
            <span onClick={handleDialogClose}>
              <Image src={cancel} alt="cancel" width={32} height={32} />
            </span>
          </AlertDialogCancel>
          <AlertDialogHeader className="flex w-full items-center justify-center">
            <AlertDialogTitle>
              <Image src={greenCheck} alt="add" width={160} height={160} />
            </AlertDialogTitle>
          </AlertDialogHeader>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <AlertDialogDescription className="w-2/3 pt-2 font-medium sm:w-3/5">
            Your payment page has been created! You can visit the link to make a
            demo payment or edit it later on.
          </AlertDialogDescription>

          <CopyLink link="www.basepay.com/APIKey?th=6372r3v0x0hw" />

          <ModalButton
            onClick={handleDialogClose}
            className="w-full bg-blue py-4 text-white"
            icon={visit}
            text="Visit your page"
          />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PaymentLinkCreated;
