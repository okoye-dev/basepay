"use client";
import React, { FC, useState } from "react";
import Key from "../app/assets/globe.svg";
import Image from 'next/image'

// interface IProps {
//   apiKey: string;
// }

const WebHook = () => {
  const [isCopied, setIsCopied] = useState(false);
  const webHookKey = "www.basepay.com/WebhookUR.L_an..";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className="text-sm text-center mt-8 flex w-full justify-center rounded-3xl border p-10 font-light text-black">
      <div className="w-[80%] flex flex-col align-middle justify-center gap-4">
        <Image className="self-center" src={Key} alt="" />
        <p>
          Your Webhook URL is ready! You can now start using it to plug into
          other third party integrations
        </p>
        <div>
          <div className="text-sm mt-8 flex w-full justify-between rounded-full border py-2 pl-10 font-bold text-black">
            <input
              placeholder="api key"
              type="text"
              value={webHookKey}
              readOnly
            />
            <div className="text-blue flex gap-4">

            <button className="px-4 py-2 bg-[#3B72FF1A] rounded-full" onClick={handleCopy}>
              {isCopied ? "Copied!" : "Copy"}
            </button>
            <button className="px-4 py-2 bg-[#3B72FF1A] rounded-full" onClick={handleCopy}>
              {isCopied ? "Copied!" : "Copy"}
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHook;
