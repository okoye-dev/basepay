import React, { FC } from "react";

interface IProps {
  link: string;
}

const CopyLink: FC<IProps> = ({ link }: IProps) => {
  return (
    <span className="font-meidum rounded-full border border-border px-4 py-2">
      {link}
    </span>
  );
};

export default CopyLink;
