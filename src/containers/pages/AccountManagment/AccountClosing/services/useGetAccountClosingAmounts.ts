import { useEffect, useState } from "react";
import { LOLCSDK } from "../../../../../sdk";

const GetCloingAccountAmounts = (accountId: number) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const token = "TODO";
  // LOLCSDK
  useEffect(() => {
    setLoading(true);
    const SDK = new LOLCSDK({
      tenantId: "AnRkr",
      token:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEwTTJNVE5FT1RrNE1EZzBSa0ZHUWtFME9UTkRRMFF6TlRWRlJEazVNVUl6UlVNMVJVUTRPUSJ9.eyJodHRwOi8vbG9sY3RlY2guY29tL25pY25hbWUiOiJpc2hhbmthIiwiaXNzIjoiaHR0cHM6Ly9mdXNpb254LXFhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZThkOTkwYjhjODZhNDBjNjc0MjBiMzgiLCJhdWQiOiJodHRwczovL2Z1c2lvbngtYXBpLyIsImlhdCI6MTU5MzI1NzI5MSwiZXhwIjoxNTkzMzQzNjkxLCJhenAiOiJDcDhYdFpET3l6YVk0OGZMVjNkUEwycFBlNkRBblVxZiIsInNjb3BlIjoiY3VzdG9tZXI6b25ib2FyZDp2aWV3aW5mbyBjdXN0b21lcjpvbmJvYXJkOnVwZGF0ZWluZm8gY3VzdG9tZXI6b25ib2FyZDp1cGRhdGVhcHByb3ZlIGN1c3RvbWVyOm9uYm9hcmQ6YWRkaW5mbyBjdXN0b21lcjpvbmJvYXJkOmFwcHJvdmUgY3VzdG9tZXI6b25ib2FyZDpmaW5pc2ggY3VzdG9tZXI6b25ib2FyZDpyZWplY3QgY3VzdG9tZXI6b25ib2FyZDpzYW5jdGlvbnN0YXR1cyBjdXN0b21lcjpvbmJvYXJkOmJhbmt1cGRhdGUiLCJwZXJtaXNzaW9ucyI6W119.PPjbwJQ6tX7wZzfJCph6oV8KEzqXeELzj-VHFMF2ipFPEHp7KK_LcBCFujjiThfWAEKBJLoPWrISa40XoJMsG0LJOmJxm4fEUVlqipMPMPWGLbIyeDIIOWNQ0OgzmfKdPeCb89O1Kb3DzxyIuoRuNGvXE3CmaAZudFtmnIoP8iURZWJp7JxjaHaitjWz2ZMtCmc5CbfWzGlC9DTpN5RZb5qgkWikJ0wjMmfVkfMd0o3hDEo-nKd9W3CxsRSmXt4UQTy-UjpyAgjLIjYsrUhHlrMTEfFdGhhudaGTO9ocTrcc0ql7Hl6hiRSB-3wMB3g5L5qIsayHK9LQb1gPJUweLQ",
      basePath: "https://qa-sl.fusionx.biz",
    });

    const getAmounts = async () => {
      console.log("running");
      // let b = await SDK.AccountService.cancelCloseAccount();
      // console.log("data :", b);
      try {
      } catch (e) {
        console.log("interest accrued warn :", e);
      }
      //   let b = await SDK.InterestScheduleService.getAccuredBonusInterest(
      //     accountId
      //   );
      //   let d = await SDK.InterestScheduleService.getAccuredCreditInterest(
      //     accountId
      //   );

      //   setData(...d);
      setLoading(false);
    };
    getAmounts();
  }, [token]);
  return { data, loading };
};

export default GetCloingAccountAmounts;
