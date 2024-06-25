import PageDetails from "@/components/PageDetails";
import RecentPayments from "@/components/RecentPayments";
import PageLink from "@/components/PageLink";
import React, { FC } from "react";

interface IProps {}

const PaymentLinkPage: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-[20px] lg:flex-row">
      <section className="flex flex-col gap-4 lg:max-w-[50%] --mr-4">
        <PageLink />
        <PageDetails />
      </section>
      <RecentPayments />
    </div>
  );
};

export default PaymentLinkPage;
