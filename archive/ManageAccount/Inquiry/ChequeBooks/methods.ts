import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../../sdk";
import { IssuedChequeBook } from "../../../../../../sdk/casa-cheque-book-management/interfaces";

export const useGetChequeBooksByAccountId = (accountId: string) => {
  const [data, setData] = useState<IssuedChequeBook[]>([]);
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

    const searchChequebooks = async () => {
      try {
        let d = await SDK.ChequeBookManagementService.getChequeBookByAccountId(
          accountId
        );
        d && setData([...d]);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    searchChequebooks();
  }, [accountId, token]);
  return { data, loading, error };
};

export const useGetChequeBookById = (chequeBookId: string) => {
  const [data, setData] = useState<IssuedChequeBook>({} as any);
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

    const getChequeBookDetailsById = async () => {
      try {
        let d = await SDK.ChequeBookManagementService.getChequebookIssueById(
          chequeBookId
        );
        d && setData(d);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };

    getChequeBookDetailsById();
  }, [chequeBookId, token]);
  return { data, loading, error };
};

export const useGetChequeBookLeavesById = (chequeBookId: string) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(false);
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

    const searchCheckbookLeaves = async () => {
      try {
        let d = await SDK.ChequeBookManagementService.getChequeLeavesByChequebookId(
          chequeBookId
        );
        d && setData(d);
        setError(false);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setLoading(false);
    };
    searchCheckbookLeaves();
  }, [chequeBookId, token]);
  return { data, loading, error };
};
