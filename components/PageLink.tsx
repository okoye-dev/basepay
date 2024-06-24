import React, { FC } from "react";
import CopyLink from "./CopyLink";

interface IProps {}

const PageLink: FC<IProps> = (props) => {
  return (
    <div className="rounded-3xl border-2 border-border px-4 py-2 text-sm font-semibold">
      <CopyLink link={"link"} />
    </div>
  );
};

export default PageLink;
