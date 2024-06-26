import React, { FC } from "react";
import ApiKey from "../../components/ApiKey";
import Header from "@/components/Header";

interface IProps {}

const APIKey: FC<IProps> = (props) => {
  return <div className="">
    <Header name={"API Key"}/>
    <ApiKey/>
  </div>;
};

export default APIKey;
