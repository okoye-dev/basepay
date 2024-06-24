"use client";

import React, { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long").max(50),
});

interface IProps {}

const CreateNewPaymentForm: FC<IProps> = (props) => {
  return <></>;
};

export default CreateNewPaymentForm;
