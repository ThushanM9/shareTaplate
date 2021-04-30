import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../../sdk";

export const useGetIssuedPassbooksByAccountID = (accountId: string) => {
  const [data, setData] = useState<any[]>([]);
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

    const searchPassbooks = async () => {
      try {
        let d = await SDK.TransactionService.getIssuedPassbooksByAccountId(
          accountId as any
        );
        d && setData([...d]);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    searchPassbooks();
  }, [accountId, token]);
  return { data, loading, error };
};

export const useGetPassbookById = (passbookId: number) => {
  const [data, setData] = useState<any>({});
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

    const searchPassbookById = async () => {
      try {
        let d = await SDK.TransactionService.getPassbookById(passbookId);
        d && setData(d);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };

    searchPassbookById();
  }, [passbookId, token]);
  return { data, loading, error };
};
