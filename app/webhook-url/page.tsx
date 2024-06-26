import React, { FC } from "react";
import Webhook from "../../components/WebHook";
import Header from "@/components/Header";

interface IProps {}

const WebhookURL: FC<IProps> = (props) => {
  return (<div className="w-full px-10">
    <Header name={"Webhook URL"}/>
    <Webhook/>
  </div>);
};

export default WebhookURL;
