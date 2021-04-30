import { Input } from "antd";
import React from "react";
import { CardTemplate } from "./card-template";
export const ServiceOfficerCard = ({
  name,
  title,
}: {
  name: string;
  title: string;
}) => (
  <CardTemplate title={title}>
    <Input size="small" disabled={true} value={name}></Input>
  </CardTemplate>
);
