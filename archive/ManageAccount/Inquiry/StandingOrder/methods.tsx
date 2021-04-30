import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../../sdk";
import { StandingOrder } from "../../../../../../sdk/casa-sto/interfaces";
import { PaginatedResponse } from "../../../../../../sdk/utils/common";

export const useGetAllStandingOrdersByAccountId = (accountId: string) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState<PaginatedResponse<StandingOrder>>({
    content: [],
    pageable: {
      sort: {
        sorted: false,
        unsorted: false,
        empty: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      paged: false,
      unpaged: false,
    },
    last: false,
    totalElements: 0,
    totalPages: 0,
    size: 0,
    number: 0,
    sort: {
      sorted: false,
      unsorted: false,
      empty: false,
    },
    numberOfElements: 0,
    first: false,
    empty: false,
  });
  const [loading, setLoading] = useState(true);
  const token = "";
  // LOLCSDK
  useEffect(() => {
    setLoading(true);
    const SDK = new LOLCSDK({
      tenantId: "AnRkr",
      token,
      basePath: "http://132.145.228.83",
    });

    const searchStandingOrders = async () => {
      try {
        let d = await SDK.StandingOrderService.getAllStandingOrdersByAccountId(
          accountId as any
        );
        d.content && d.content.length > 0 && setData(d);
        setError(false);
      } catch {
        setError(true);
      }

      setLoading(false);
    };
    searchStandingOrders();
  }, [accountId, token]);
  return { data, loading, error };
};

export const useGetStandingOrderById = (standingOrderId: string) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState<StandingOrder>({} as any);
  const [loading, setLoading] = useState(true);
  const token = "";
  // LOLCSDK
  useEffect(() => {
    setLoading(true);
    const SDK = new LOLCSDK({
      tenantId: "AnRkr",
      token,
      basePath: "http://132.145.228.83",
    });

    const searchStandingOrderById = async () => {
      try {
        let d = await SDK.StandingOrderService.getStandingOrderById(
          standingOrderId as any
        );
        d && setData(d);
        setError(false);
      } catch {
        setError(true);
      }

      setLoading(false);
    };
    searchStandingOrderById();
  }, [standingOrderId, token]);
  return { data, loading, error };
};
