import React, { FC, ReactNode } from "react";
import back from "@/app/assets/back.svg";
import Image from "next/image";
import PageLink from "@/components/PageLink";
import Link from "next/link";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps) => {
  return (
    <div className="text-2xl font-semibold">
      <div className="flex items-center justify-start gap-5 pb-6">
        <Link href="/payment-pages">
          <Image src={back} alt="back" width={12} height={12} />
        </Link>
        <h1>Hackathon Payment</h1>
      </div>
      <div className="flex flex-col pb-2">
        <h1 className="pb-4 pt-2">Page Link</h1>
        <PageLink />
      </div>
      <h1 className="py-4">Page Details</h1>
      {children}
    </div>
  );
};

export default Layout;
