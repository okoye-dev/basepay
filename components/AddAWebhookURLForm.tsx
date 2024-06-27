"use client";
import React, { FC, useState } from "react";
import Input from "./Input"; // Adjust the path as necessary
import PaymentLinkCreated from "./PaymentLinkCreated";

interface IProps {
  onClose: () => void;
}

const AddAWebhookURLForm: FC<IProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    webhookUrl: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-medium">
      <Input
        placeholder="Enter URL"
        id="webhookUrl"
        label="Webook URL"
        formData={formData.webhookUrl}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="my-3 flex w-full items-center justify-center rounded-full bg-blue py-3 text-white"
      >
        Add Webhook
      </button>
    </form>
  );
};

export default AddAWebhookURLForm;
