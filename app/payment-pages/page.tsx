import CreatePaymentLink from "@/components/CreatePaymentLink";
import React, { FC } from "react";

interface IProps {}

const PaymentPages: FC<IProps> = (props) => {
  return (
    <div>
      <CreatePaymentLink />
    </div>
  );
};

export default PaymentPages;
