import React, { FC } from "react";
import active from "@/app/assets/active.svg";
import share from "@/app/assets/share-no-border.svg";
import edit from "@/app/assets/edit-no-border.svg";
import del from "@/app/assets/delete-no-border.svg";
import Image from "next/image";
import ModalButton from "./ModalButton";

interface IProps {}

const PageDetails: FC<IProps> = (props) => {
  const details = [
    "Status",
    "Page name",
    "Currency",
    "Page amount",
    "Created",
    "Description",
  ];

  const dummyDetails = {
    status: "Active",
    pageName: "Hackathon Payment",
    currency: "Nigerian Naira",
    pageAmount: "5,000.00",
    created: "17th June 2024",
    description: "For 2024 Hackathon",
  };

  return (
    <section className="flex flex-col">
      <h1 className="py-4">Page Details</h1>
      <div className="flex h-fit flex-col gap-3 rounded-3xl border-2 border-border px-4 py-6 text-base md:gap-5 md:px-8">
        <span className="flex items-center justify-between">
          <div className="font-medium text-textGray">Status</div>
          <span className="flex items-center justify-center gap-2">
            {dummyDetails.status}
            <Image src={active} alt="active" width={24} height={24} />
          </span>
        </span>

        <span className="flex items-center justify-between">
          <div className="font-medium text-textGray">Page name</div>
          <span className="flex items-center justify-center gap-2">
            {dummyDetails.pageName}
          </span>
        </span>

        <span className="flex items-center justify-between">
          <div className="font-medium text-textGray">Currency</div>
          <span className="flex items-center justify-center gap-2">
            {dummyDetails.currency}
          </span>
        </span>

        <span className="flex items-center justify-between">
          <div className="font-medium text-textGray">Page amount</div>
          <span className="flex items-center justify-center gap-2">
            {dummyDetails.pageAmount}
          </span>
        </span>

        <span className="flex items-center justify-between">
          <div className="font-medium text-textGray">Created</div>
          <span className="flex items-center justify-center gap-2">
            {dummyDetails.created}
          </span>
        </span>

        <span className="flex items-center justify-between">
          <div className="font-medium text-textGray">Description</div>
          <span className="flex items-center justify-center gap-2">
            {dummyDetails.description}
          </span>
        </span>

        <div className="flex items-center justify-center gap-3 pt-3">
          <ModalButton icon={share} text="Share" />
          <ModalButton icon={edit} text="Edit" />
          <ModalButton
            icon={del}
            text="Delete"
            className="bg-red/10 text-red"
          />
        </div>
      </div>
    </section>
  );
};

export default PageDetails;
