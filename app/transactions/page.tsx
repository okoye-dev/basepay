import React, { FC } from "react";
import Transcations from "../../components/TranscationList"
import Header from "@/components/Header";

interface IProps {}

const Transactions: FC<IProps> = (props) => {
  return <div className="text-black w-full">
    <Header name={"Transactions"}/>
    <Transcations/>
  </div>;
};

export default Transactions;
