import PaymentLinkCard from "@/components/PaymentLinkCard";
import React, { FC } from "react";
import { LinkData } from "../types/types";
import { useLinkData } from "../hooks/useLinkData";

interface IProps {}

const PaymentPages: FC<IProps> = (props) => {
  const data: LinkData[] = useLinkData();

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6">
      {data.map((item, index) => (
        <PaymentLinkCard index={index} linkData={item} />
      ))}
    </div>
  );
};

export default PaymentPages;
