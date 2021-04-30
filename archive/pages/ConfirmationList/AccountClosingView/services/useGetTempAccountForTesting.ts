import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../sdk";

const GetTempAccount = () => {
  const [data, setData] = useState<any>({});
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

    const getTempAccount = async () => {
      let tempData = await SDK.AccountService.getAccountById("969025");
      setData(tempData);
      setLoading(false);
    };
    getTempAccount();
  }, [token]);
  return { data, loading };
};

export default GetTempAccount;
