"use client";
import React, { FC, useState } from "react";
import Button from "./Button";
import payment from "@/app/assets/nav-links/payment.svg";
import transactions from "@/app/assets/nav-links/transactions.svg";
import api from "@/app/assets/nav-links/api.svg";
import webhook from "@/app/assets/nav-links/webhook.svg";
import paymentBlue from "@/app/assets/nav-links/payment-blue.svg";
import transactionsBlue from "@/app/assets/nav-links/transactions-blue.svg";
import apiBlue from "@/app/assets/nav-links/api-blue.svg";
import webhookBlue from "@/app/assets/nav-links/webhook-blue.svg";
import NavItem from "./NavItem";
import Link from "next/link";

interface IProps {
  navOpen: boolean;
  toggleNav: () => void;
}

const SideNav: FC<IProps> = ({ navOpen, toggleNav }: IProps) => {
  const navItems = [
    {
      title: "Payment pages",
      page: "payment-pages",
      img: payment,
      imgBlue: paymentBlue,
    },
    {
      title: "Transactions",
      page: "transactions",
      img: transactions,
      imgBlue: transactionsBlue,
    },
    { title: "API Key", page: "api-key", img: api, imgBlue: apiBlue },
    {
      title: "Webhook URL",
      page: "webhook-url",
      img: webhook,
      imgBlue: webhookBlue,
    },
  ];

  const [activeNav, setActiveNav] = useState(0);
  const makeActive = (index: number) => {
    setActiveNav(index);
  };

  return (
    <div
      className={`fixed left-0 top-[81px] h-screen border bg-white px-6 duration-300 ${navOpen ? "translate-x-0" : "-translate-x-full md:-translate-x-0"} pt-6 shadow-lg`}
    >
      <Button hasAddIcon={true} className="px-8 py-4">
        New payment page
      </Button>

      <div className="relative mt-6 rounded-3xl bg-gray p-6">
        <span
          className={`absolute left-0 top-6 flex h-8 w-1 rounded-full bg-blue duration-300 ${activeNav === 1 ? "translate-y-11" : activeNav === 2 ? "translate-y-[94px]" : activeNav === 3 ? "translate-y-[140px]" : "translate-y-0"}`}
        />

        <ul className="flex flex-col gap-5">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                makeActive(index);
                toggleNav();
              }}
              className="cursor-pointer"
            >
              <Link href={`/${item.page}`}>
                <NavItem
                  active={activeNav === index}
                  regular={item.img}
                  blue={item.imgBlue}
                  text={item.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
