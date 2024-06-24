import CreatePaymentLink from "@/components/CreatePaymentLink";
import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div>
      <div className="mt-7 flex flex-col gap-6 text-3xl font-semibold">
        Payment pages
        <CreatePaymentLink />
        Current pages
      </div>
      {children}
    </div>
  );
};

export default Layout;
