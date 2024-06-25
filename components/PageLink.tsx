import React, { FC } from "react";
import CopyLink from "./CopyLink";
import ModalButton from "./ModalButton";
import share from "@/app/assets/share-no-border.svg";
import visitLink from "@/app/assets/visit-link-no-border.svg";

interface IProps {}

const PageLink: FC<IProps> = (props) => {
  const dummyLink = "www.basepay.com/DefiHacks/hackatho-82663n268g2";
  return (
    <section>
      <h1 className="pb-4 pt-2">Page Link</h1>
      <div className="flex flex-col gap-3 rounded-3xl border-2 border-border px-4 py-4 text-sm font-semibold">
        <CopyLink link={dummyLink} />
        <div className="flex items-center gap-3">
          <ModalButton icon={share} text="Share" />
          <ModalButton icon={visitLink} text="Visit Link" />
        </div>
      </div>
    </section>
  );
};

export default PageLink;
