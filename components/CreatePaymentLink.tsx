import React, { FC } from "react";
import Button from "./Button";

interface IProps {}

const CreatePaymentLink: FC<IProps> = (props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[20px] border border-border bg-blue/5 py-10">
      <p className="text-center font-medium">
        Click the button below to create a <br />
        new payment link and start receiving <br />
        payments with base
      </p>
      <Button hasAddIcon={true}>Create a new page</Button>
    </div>
  );
};

export default CreatePaymentLink;
