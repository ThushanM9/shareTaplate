import { Input } from "antd";
import React from "react";
import { CardTemplate } from "./card-template";
export const TicketNumberCard = ({ name }: { name: string }) => (
  <CardTemplate title="Ticket Number">
    <Input size="small" disabled={true} value={name}></Input>
  </CardTemplate>
);
