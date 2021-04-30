import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../../sdk";
import { ScheduledPayment } from "../../../../../../sdk/casa-scheduled-payments/interfaces";
import { PaginatedResponse } from "../../../../../../sdk/utils/common";

export const useGetAllScheduledPaymentByAccountId = (accountId: string) => {
  const [data, setData] = useState<PaginatedResponse<ScheduledPayment>>({
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
  const [error, setError] = useState(false);
  const token = "";
  // LOLCSDK
  useEffect(() => {
    setLoading(true);
    const SDK = new LOLCSDK({
      tenantId: "AnRkr",
      token,
      basePath: "http://132.145.228.83",
    });

    const searchScheduledPayments = async () => {
      try {
        let d = await SDK.ScheduledPaymentService.getScheduledPaymentsByAccountId(
          accountId
        );
        d.content && d.content.length > 0 && setData(d);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    searchScheduledPayments();
  }, [accountId, token]);
  return { data, loading, error };
};

export const useGetScheduledPaymentById = (schedulePaymentId: string) => {
  const [data, setData] = useState<ScheduledPayment>({} as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const token = "";
  // LOLCSDK
  useEffect(() => {
    setLoading(true);
    const SDK = new LOLCSDK({
      tenantId: "AnRkr",
      token,
      basePath: "http://132.145.228.83",
    });

    const serachScheduledPayments = async () => {
      try {
        let d = await SDK.ScheduledPaymentService.getScheduledPaymentById(
          schedulePaymentId
        );
        d && setData(d);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    serachScheduledPayments();
  }, [schedulePaymentId, token]);
  return { data, loading, error };
};
