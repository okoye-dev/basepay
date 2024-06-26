import React, { FC } from "react";
import Transcations from "../../components/TranscationList"
import Header from "@/components/Header";
import Back from "../assets/back-blue.svg"
import Forward from "../assets/forward-blue.svg"
import Image from "next/image";

interface IProps {}

const Transactions: FC<IProps> = (props) => {
  return <div className="text-black w-full px-10 pb-20">
    <Header name={"Transactions"}/>
    <Transcations/>
    <div className="flex justify-center">
      <Image src={Back} alt=""/>
      <Image src={Forward} alt=""/>
    </div>
  </div>;
};

export default Transactions;
