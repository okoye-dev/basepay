import React, { FC } from "react";
import Image from "next/image";
import share from "@/app/assets/share.svg";
import copy from "@/app/assets/copy.svg";
import edit from "@/app/assets/edit.svg";
import ellipses from "@/app/assets/ellipses.svg";
import visitLink from "@/app/assets/visit-link.svg";
import { LinkData } from "@/types/types";
import Link from "next/link";
import { useFormatDate } from "@/hooks/useFormatDate";

interface IProps {
  linkData: LinkData;
  index: number;
}

const PaymentLinkCard: FC<IProps> = ({ linkData, index }: IProps) => {
  const icons = [share, copy, edit, ellipses, visitLink];

  return (
    <div
      key={index}
      className="flex w-full max-w-md flex-col items-start justify-center gap-1 rounded-3xl border border-border p-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-black/10"
    >
      <span className="flex w-full items-center justify-start gap-2">
        {icons.map((icon, index) => (
          <span key={index}>
            <Image
              src={icon}
              alt="icon"
              className="h-10 w-10"
              width={12}
              height={12}
            />
          </span>
        ))}
      </span>
      <span className="my-1 h-[2px] w-full bg-border" />
      <Link
        href={"/payment-link-page"}
        className="pt-1 text-xl font-medium duration-300 hover:text-blue"
      >
        {linkData.slug}
      </Link>
      <Link
        href={"www.basepay.com/fakeLink/DefiHacks/hackatho-82663n268g2"}
        className="block w-full overflow-hidden text-ellipsis whitespace-nowrap pb-1 text-sm font-medium text-blue hover:underline"
        passHref
      >
        {linkData.link}
      </Link>
      <div className="flex items-center justify-center gap-3 py-1">
        <p className="rounded-full bg-gray px-6 py-2 text-sm font-medium text-textGray">
          {useFormatDate(linkData.createdAt)}
        </p>
        <p className="rounded-full bg-gray px-6 py-2 text-sm font-medium text-textGray">
          {linkData.clicks} Clicks
        </p>
      </div>
    </div>
  );
};

export default PaymentLinkCard;
