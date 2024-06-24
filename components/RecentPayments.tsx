import React, { FC } from "react";
import view from "@/app/assets/view.svg";
import back from "@/app/assets/back-blue.svg";
import forward from "@/app/assets/forward-blue.svg";
import Image from "next/image";
import ModalButton from "./ModalButton";
import { useRecentPayments } from "@/app/hooks/useRecentPayments";

interface IProps {}

const RecentPayments: FC<IProps> = ({}) => {
  const dummmyPayments = useRecentPayments();

  return (
    <div className="my-8 rounded-3xl border-2 border-border px-5 py-6 font-semibold">
      Recent Payments
      {dummmyPayments.map((payment, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between gap-1 py-3 text-sm font-semibold"
        >
          <div className="flex w-full items-center justify-between gap-2">
            <p className="w-2/3 overflow-hidden text-ellipsis text-nowrap text-base">
              {payment.walletAddress}
            </p>
            <ModalButton
              icon={view}
              text="View"
              className="border border-blue/10 bg-white text-sm"
            />
          </div>
          <div className="flex w-full items-center justify-between text-lg font-semibold">
            <p className="font-bold">NGN {payment.amount}</p>
            <p className="">{payment.date}</p>
          </div>
          <span className="mt-1 h-[2px] w-full bg-gray" />
        </div>
      ))}
      <span className="flex items-center justify-center gap-2">
        <Image src={back} alt="back" width={28} height={28} />
        <span className="flex h-[30px] w-[30px] text-base items-center justify-center rounded-full border border-blue">
          1
        </span>
        <Image src={forward} alt="forward" width={28} height={28} />
      </span>
    </div>
  );
};

export default RecentPayments;
