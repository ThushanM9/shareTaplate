import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../sdk";

const GetStandingOrderDetails = (accountId: string) => {
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

    const getFrequency = async () => {
      let d = await SDK.StandingOrderService.getStandingOrderById(
        Number(accountId)
      );
      setData(d);
      setLoading(false);
    };
    getFrequency();
  }, [accountId, token]);
  return { data, loading };
};

export default GetStandingOrderDetails;
