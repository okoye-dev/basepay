"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import add from "@/app/assets/add.svg";
import cancel from "@/app/assets/cancel.svg";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CreatePaymentLinkForm from "./CreatePaymentLinkForm";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

interface IProps {}

const SideNavCreateNewPaymentPage: FC<IProps> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <span
          onClick={handleDialogOpen}
          className="flex cursor-pointer items-center justify-center gap-2 text-balance rounded-full bg-blue px-6 py-3 text-base font-medium text-white"
        >
          <Image
            src={add}
            alt="create new"
            className="h-4 w-4"
            width={12}
            height={12}
          />
          New Paymennt page
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex w-full justify-between gap-3">
          <AlertDialogCancel asChild>
            <span onClick={handleDialogClose}>
              <Image src={cancel} alt="cancel" width={32} height={32} />
            </span>
          </AlertDialogCancel>
          <AlertDialogHeader className="w-full">
            <AlertDialogTitle>
              <AlertDialogDescription>
                Create new payment page
              </AlertDialogDescription>
            </AlertDialogTitle>
          </AlertDialogHeader>
        </div>
        <CreatePaymentLinkForm onClose={handleDialogClose} />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SideNavCreateNewPaymentPage;
