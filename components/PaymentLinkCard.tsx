import React, { FC } from "react";
import Image from "next/image";
import share from "@/app/assets/share.svg";
import copy from "@/app/assets/copy.svg";
import edit from "@/app/assets/edit.svg";
import ellipses from "@/app/assets/ellipses.svg";
import visitLink from "@/app/assets/visit-link.svg";
import { LinkData } from "@/app/types/types";
import Link from "next/link";

interface IProps {
  linkData: LinkData;
  index: number;
}

const PaymentLinkCard: FC<IProps> = ({ linkData, index }: IProps) => {
  const icons = [share, copy, edit, ellipses, visitLink];

  // Ensure the link is treated as an external link
  const formattedLink =
    linkData.link.startsWith("http://") || linkData.link.startsWith("https://")
      ? linkData.link
      : `https://${linkData.link}`;

  return (
    <Link
      href={"/payment-link-page"}
      key={index}
      className="flex w-full flex-col items-start justify-center gap-1 rounded-3xl border border-border p-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-black/10"
    >
      <span className="flex w-full items-center justify-start gap-2">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt="icon"
            className="h-10 w-10"
            width={12}
            height={12}
          />
        ))}
      </span>
      <span className="my-1 h-[2px] w-full bg-border" />
      <h1 className="pt-1 text-xl font-medium">{linkData.title}</h1>
      <Link
        href={formattedLink}
        className="block w-full overflow-hidden text-ellipsis whitespace-nowrap pb-1 text-sm font-medium text-blue hover:underline"
        passHref
      >
        {linkData.link}
      </Link>
      <div className="flex items-center justify-center gap-3 py-1">
        <p className="rounded-full bg-gray px-6 py-2 text-sm font-medium text-textGray">
          {linkData.date}
        </p>
        <p className="rounded-full bg-gray px-6 py-2 text-sm font-medium text-textGray">
          {linkData.clicks} Clicks
        </p>
      </div>
    </Link>
  );
};

export default PaymentLinkCard;
