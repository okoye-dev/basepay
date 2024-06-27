"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import add from "@/app/assets/add.svg";
import cancel from "@/app/assets/cancel.svg";
import globe from "@/app/assets/globe.svg";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import AddAWebhookURLForm from "./AddAWebhookURLForm";

interface IProps {}

const CreatePaymentLink: FC<IProps> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 py-10 text-base my-5">
      <Image
        className="self-center"
        src={globe}
        alt="webhook icon"
        width={160}
        height={160}
      />

      <p className="text-center font-medium">
        You don’t have a webhook URL yet. Create a new <br /> one and start
        using it.
      </p>

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
            Add a new Webhook URL
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
          <AddAWebhookURLForm onClose={handleDialogClose} />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreatePaymentLink;
