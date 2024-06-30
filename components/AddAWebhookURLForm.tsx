"use client";
import React, { FC, useState } from "react";
import Input from "./Input"; // Adjust the path as necessary
import PaymentLinkCreated from "./PaymentLinkCreated";

interface IProps {
  onClose: () => void;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const AddAWebhookURLForm: FC<IProps> = ({ onClose, setSuccess, setData }) => {
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

  // post to api
  const addWebhookUrl = async () => {
    try {
      // already authenticated username
      const username =
        "e4c0b812dd5bb5efbfbacb34322fa7b29d3723031f2ffc065067a3b3c2fd3a8f";
      const password = "your-password";
      const basicAuth = btoa(`${username}:${password}`);

      const res = await fetch("http://localhost:3000/api/user/addWebhookUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
        body: JSON.stringify({ webhookUrl: formData.webhookUrl }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const responseData = await res.json();

      console.log("res: ", responseData);
      setSuccess(true);
      setData(formData.webhookUrl);
    } catch (err) {
      console.error("error posting: ", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, "Posting now...");
    await addWebhookUrl();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-medium">
      <Input
        placeholder="Enter URL"
        id="webhookUrl"
        label="Webhook URL"
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
