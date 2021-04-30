import Axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../config";

export const AxiosGet = <T>(
  url: string,
  env: EnvConfig,
  params?: { [key: string]: any }
): Promise<AxiosResponse<T>> => {
  const res = Axios.get(env.basePath + url, {
    headers: { Authorization: env.token },
    params: !!params && params,
  });
  return res;
};

export const AxiosPost = <T>(url: string, body: any, env: EnvConfig) => {
  const { basePath, token } = env;
  const res = Axios.post<T>(basePath + url, body, {
    headers: { Authorization: token },
  });
  return res;
};

export const AxiosPut = <T>(url: string, body: any, env: EnvConfig) => {
  const { basePath, token } = env;
  const res = Axios.put<T>(basePath + url, body, {
    headers: { Authorization: token },
  });

  return res;
};
