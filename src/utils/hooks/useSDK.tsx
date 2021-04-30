import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { LOLCSDK } from "../../sdk";

let SDK: LOLCSDK;

export const useGetSDK = () => {
  const [token, setToken] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then((d) => {
      setToken(d);
    });
  }, [getAccessTokenSilently, setToken]);

  useEffect(() => {
    SDK = new LOLCSDK({
      tenantId: "AnRkr",
      token: `Bearer ${token}`,
      // basePath: "http://132.145.228.83",
      basePath: "https://qa-sl.fusionx.biz",
    });
  }, [token]);

  return SDK;
};

export const useSDK = <T extends unknown>(
  callFunction: (sdk: LOLCSDK) => Promise<T>,
  dependencies: any[] = [],
  disable?: boolean,
  defaultValue = {}
) => {
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState(defaultValue as T);
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState({
    loading: true,
    data: defaultValue as T,
  });
  const { getAccessTokenSilently } = useAuth0();
  // LOLCSDK
  useEffect(() => {
    setLoading(true);
    const callAPI = async () => {
      const token = await getAccessTokenSilently();
      const SDK = new LOLCSDK({
        tenantId: "AnRkr",
        token: `Bearer ${token}`,
        // basePath: "http://132.145.228.83"
        basePath: "https://qa-sl.fusionx.biz",
      });
      let d: any;

      d = await callFunction(SDK);

      setPayload({ loading: false, data: d });
      setLoading(false);
      setData(d);
    };
    if (!disable) {
      try {
        callAPI();
        setHasError(false);
      } catch (e) {
        setHasError(true);
      }
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
  return { data, loading, error: hasError, payload };
};
