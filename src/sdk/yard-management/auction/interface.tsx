import { STATUS_TYPE } from "../../utils/common";

export interface auction {
  id: number;
  version: number;
  syncTs: Date;
  tenantId: string;
  referenceNo: string;
  auctioneerId: number;
  dateTime: Date;
  venue: string;
  description: string;
  status: STATUS_TYPE;
  createdUser: string;
  createdDate: Date;
  modifiedUser: string;
  modifiedDate: Date;
}

export interface updateAuctionRequestResource {
  auctioneerId: string;
  auctioneerReferenceCode: string;
  dateTime: string;
  description: string;
  id: string;
  referenceNo: string;
  status: string;
  venue: string;
  version: string;
}


export interface addAuction {
    auctioneerId: string;
    auctioneerReferenceCode: string;
    dateTime: string;
    description: string;
    id: string;
    referenceNo: string;
    status: string;
    venue: string;
    version: string;
  }
  