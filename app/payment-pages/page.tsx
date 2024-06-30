"use client";
import PaymentLinkCard from "@/components/PaymentLinkCard";
import React, { FC, useEffect, useState } from "react";

interface IProps {}

const PaymentPages: FC<IProps> = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPaymentLinks = async () => {
    try {
      const username =
        "e4c0b812dd5bb5efbfbacb34322fa7b29d3723031f2ffc065067a3b3c2fd3a8f";
      const password = "your-password";
      const basicAuth = btoa(`${username}:${password}`);

      const res = await fetch(
        "http://localhost:3000/api/payment/userPaymentLinks",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${basicAuth}`,
          },
        },
      );
      const responseData = await res.json();
      console.log("res: ", responseData.data);
      setData(responseData.data);
    } catch (err) {
      console.log("error getting links: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPaymentLinks();

    const interval = setInterval(() => {
      getPaymentLinks();
    }, 10000); // Polling interval set to 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-6">
      {loading ? (
        <div className="flex items-center justify-center gap-1 py-10">
          <span className="flex h-2 w-2 animate-bounce rounded-full bg-blue delay-0"></span>
          <span className="flex h-2 w-2 animate-bounce rounded-full bg-blue delay-150"></span>
          <span className="flex h-2 w-2 animate-bounce rounded-full bg-blue delay-300"></span>
        </div>
      ) : (
        data
          .slice()
          .reverse()
          .map((item, index) => (
            <PaymentLinkCard key={index} index={index} linkData={item} />
          ))
      )}
    </div>
  );
};

export default PaymentPages;
