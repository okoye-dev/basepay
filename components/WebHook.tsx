"use client";
import React, { FC, useState } from "react";
import Key from "../app/assets/globe.svg";
import Image from "next/image";
import Modal from 'react-modal';

// interface IProps {
//   apiKey: string;
// }

const WebHook = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [webHookURL, setWebHookURL] = useState("");
  const webHookKey = "";
//   const webHookKey = "www.basepay.com/WebhookUR.L_an..";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(webHookKey);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleURLChange = (e) => {
    setWebHookURL(e.target.value);
  };

  const handleSubmit = () => {
    // Handle webhook URL submission logic here
    console.log("Webhook URL submitted:", webHookURL);
    closeModal();
  };

  return (
    <div className="mt-8 flex w-full justify-center rounded-3xl border p-10 text-center text-sm font-light text-black">
      <div className="flex w-[80%] flex-col justify-center gap-4 align-middle">
        <Image className="self-center" src={Key} alt="" />
        {webHookKey ? (
          <>
            <p>
              Your Webhook URL is ready! You can now start using it to plug into
              other third party integrations
            </p>
            <div>
              <div className="mt-8 flex w-full justify-between rounded-full border py-2 pl-10 text-sm font-bold text-black">
                <input
                  placeholder="api key"
                  type="text"
                  value={webHookKey}
                  readOnly
                />
                <div className="flex gap-4 text-blue">
                  <button
                    className="rounded-full bg-[#3B72FF1A] px-4 py-2"
                    onClick={handleCopy}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                  <button
                    className="rounded-full bg-[#3B72FF1A] px-4 py-2"
                    onClick={handleCopy}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>
              You don’t have a webhook URL yet. Create a new one and start using
              it.
            </p>
            <div className="flex justify-center">
              <div className="mt-8 flex w-full justify-center rounded-full border py-2 text-sm font-bold text-white bg-blue">
                <button
                  className="rounded-full px-4 py-2"
                  onClick={openModal}
                >
                  + Add a webhook URL
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Webhook URL"
        className="flex flex-col items-center justify-center bg-white rounded-lg p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-semibold mb-4">Add a webhook URL</h2>
        <input
          type="text"
          placeholder="Enter URL"
          value={webHookURL}
          onChange={handleURLChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue text-white rounded-full"
        >
          Add webhook
        </button>
        <button
          onClick={closeModal}
          className="mt-2 text-blue"
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default WebHook;
