import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../sdk";
import { FeatureBenifitCardSchema } from "../../../../../sdk/casa-product-bca/interfaces";

const GetAccountClosingCharges = (subProductId: string) => {
  const [data, setData] = useState<FeatureBenifitCardSchema[]>([]);
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
      let tempData = await SDK.AccountService.getAccountById("969025");
      let d = await SDK.ProductBCAService.getChargeAmountDetails(
        String(tempData.AccountData.casaSubProductId),
        "FEAC",
        0
      );
      // setData([...d]);
      setLoading(false);
    };
    getFrequency();
  }, [subProductId, token]);
  return { data, loading };
};

export default GetAccountClosingCharges;
