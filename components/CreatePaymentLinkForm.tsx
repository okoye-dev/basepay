"use client";
import React, { FC, ReactNode, useState } from "react";
import Input from "./Input"; // Adjust the path as necessary
import PaymentLinkCreated from "./PaymentLinkCreated";

interface IProps {
  onClose: () => void;
  trigger?: ReactNode;
}

const CreatePaymentLinkForm: FC<IProps> = ({ onClose, trigger }) => {
  const [formData, setFormData] = useState({
    pageName: "",
    pageDescription: "",
    amount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    createPaymentink();
  };

  const createPaymentink = async () => {
    try {
      // already authenticated username
      const username =
        "e4c0b812dd5bb5efbfbacb34322fa7b29d3723031f2ffc065067a3b3c2fd3a8f";
      const password = "your-password";
      const basicAuth = btoa(`${username}:${password}`);

      const paymentLinkData = {
        slug: formData.pageName,
        amount: formData.amount,
        description: formData.pageDescription,
      };

      const res = await fetch(
        "http://localhost:3000/api/payment/createPaymentLink",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${basicAuth}`,
          },
          body: JSON.stringify(paymentLinkData),
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      handleDialogOpen();
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("error posting: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-medium">
      <Input
        placeholder="Enter page name"
        id="pageName"
        label="Page Name"
        formData={formData.pageName}
        handleChange={handleChange}
      />

      <Input
        placeholder="Enter page description"
        id="pageDescription"
        label="Page Description"
        formData={formData.pageDescription}
        handleChange={handleChange}
      />

      <Input
        type="number"
        placeholder="Enter amount"
        id="amount"
        label="Amount (ETH)"
        formData={formData.amount}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="my-3 flex w-full items-center justify-center rounded-full bg-blue py-3 text-white"
      >
        Create Link
      </button>

      <PaymentLinkCreated
        isDialogOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        setIsDialogOpen={setIsDialogOpen}
      />
    </form>
  );
};

export default CreatePaymentLinkForm;
