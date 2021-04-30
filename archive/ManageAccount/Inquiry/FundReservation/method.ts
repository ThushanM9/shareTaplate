import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../../sdk";
import { AccountFundReservation } from "../../../../../../sdk/casa-fund-reservation/interfaces";

export const useGetFundReservationsByAccountId = (accountId: string) => {
  const [data, setData] = useState<AccountFundReservation>();
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

    const searchFundReservations = async () => {
      try {
        let d = await SDK.FundReservationService.getFundReservatinsByAccountId(
          accountId as any
        );
        d && setData(d);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    // accountDetails();
    searchFundReservations();
  }, [accountId, token]);
  return { data, loading, error };
};
