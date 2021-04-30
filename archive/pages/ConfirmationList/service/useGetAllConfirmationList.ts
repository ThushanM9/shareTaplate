import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../sdk";

function useGetAllConfirmationList() {
  const [data, setData] = useState<any[]>([]);
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

    // const getFrequencyList = async () => {
    //   let d = await SDK.AccountService;
    //   setData([...d]);
    //   setLoading(false);
    // };

    // accountDetails();
    // getFrequencyList();
  }, [token]);
  return { data, loading };
}

export default useGetAllConfirmationList;
