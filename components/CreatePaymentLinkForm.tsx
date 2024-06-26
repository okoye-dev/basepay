"use client";
import React, { FC, useState } from "react";
import Input from "./Input"; // Adjust the path as necessary
import PaymentLinkCreated from "./PaymentLinkCreated";

interface IProps {
  onClose: () => void;
}

const CreatePaymentLinkForm: FC<IProps> = ({ onClose }) => {
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
    handleDialogOpen();
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
        label="Amount"
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
